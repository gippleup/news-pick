import func from './functions/index'
import * as type from './type'
import url from 'url'
console.log(func)

export const addQuery = (query) => ({
  type: type.ADD_QUERY,
  payload: query,
})

export const deleteQuery = (query) => ({
  type: type.DELETE_QUERY,
  payload: query,
})

export const clearAllQuery = () => ({
  type: type.CLEAR_ALL_QUERY,
})

export const fetchNews = (queries, display, start, sort) => async (dispatch, getState) => {
  /* Update tag filter */
  dispatch(updateTagFilter(queries))

  /* Fetch news for keywords */
  let promises = queries.map(query => func.fetchNews(query, display, start, sort))
  let jsons = await Promise.all(promises);
  let itemBlocks = jsons.map(json => json.items);

  /* Get allowed presslist */
  let allowedPress = getState().press.allowed;
  let getHost = (item) => {
    return url.parse(item.originallink).host
  }
  let fromAllowedPress = (item) => {
    return allowedPress[getHost(item)]
  }

  /* Filter by allowed pressList */
  let pressFiltered = itemBlocks.map(
    block => block.filter(item => {
      return fromAllowedPress(item)
    })
  )

  /* Filter existing items by url */
  let existingLinks = getState().news.links
  let filteredItems = pressFiltered.map(
    block => block.filter(item => !existingLinks[item.originallink])
  )

  /* Extract metadata */
  let metaData = jsons.map(json => ({
    lastBuildDate: json.lastBuildDate,
    start: json.start,
    total: json.total,
    display: json.display,
  }))

  /* Aggregate new links */
  let newLinks = filteredItems
    .map(items => items.map(item => item.originallink))
    .reduce((acc, block) => acc.concat(block), [])
    .reduce((acc, ele) => {
      acc[ele] = true;
      return acc;
    }, {});

  /* Construct news blocks */
  let keywordBlocks = queries.reduce((acc, query, i) => {
    acc[query] = {
      items: filteredItems[i],
      lastBuildDate: metaData[i].lastBuildDate,
      total: metaData[i].total,
    }
    return acc;
  }, {})

  /* Dispatch action: FETCH_NEWS */
  dispatch({
    type: type.FETCH_NEWS,
    payload: {
      keywordBlocks,
      newLinks,
    }
  })

  /* Get hosts */
  let pressList = filteredItems.map(
    items => items
    .map(item => {
      let host = getHost(item)
      return {
        link: host,
        name: allowedPress[host],
      }
    })
  ).reduce((acc, ele) => acc.concat(ele), [])
  
  /* Dispatch action: UPDATE_PRESS */
  dispatch(updatePress(pressList, 'add'))
}


export const digNews = (keyword, itemId, url) => (dispatch) => {
  func.digNews(url)
    .then((res) => {
      console.log(res.data)
      dispatch({
        type: type.DIG_NEWS,
        payload: {
          keyword,
          itemId,
          data: res.data
        }
      })
    })
    .catch((err) => {
      console.log(err)
    })
}


export const deleteNews = (keyword, itemLink) => ({
  type: type.DELETE_NEWS,
  payload: {
    keyword,
    itemLink,
  }
})


export const deleteNewsBlock = (block={items:[], keyword:''}) => (dispatch, getState) => {
  let pressList = block.items.map((item) => {
    let host = url.parse(item.originallink).host
    let pressName = getState().press.allowed[host]
    return {
      name: pressName
    }
  })
  dispatch(updatePress(pressList, 'delete'))
  dispatch({
    type: type.DELETE_NEWSBLOCK,
    payload: block
  })
} 

/**
 * @param {String} item.title
 * @param {String} item.originallink
 * @param {String} item.description
 * @param {String} item.pubDate
 */
export const addNews = (keyword, item) => ({
  type: type.ADD_NEWS,
  payload: {
    keyword,
    item,
  }
})


/**
 * @param {Array} pressList ex)[{name:'묻지마언론사', link:'http://localhost:3000},{},{}]
 */
export const addPress = (pressList) => ({
  type: type.ADD_PRESS,
  payload: pressList
})

export const updatePress = (pressList, updateType) => ({
  type: type.UPDATE_PRESS,
  payload: {
    pressList,
    updateType
  }
})

export const deletePress = (pressList) => ({
  type: type.DELETE_PRESS,
  payload: pressList,
})



export const togglePressFilter = (links) => ({
  type: type.TOGGLE_PRESS_FILTER,
  payload: links,
})


export const updateTagFilter = tags => (dispatch, getState) => {
  let existingTags = getState().filter.tag;
  let newTags = tags.filter(
    (query) => existingTags[query] === undefined
  )
  return dispatch({
    type: type.UPDATE_TAG_FILTER,
    payload: newTags,
  })
}


export const toggleTagFilter = tag => (dispatch, getState) => {
  let newsList = getState().news.keywords[tag].items;
  let pressList = newsList.map(({originallink}) => {
    let link = url.parse(originallink).host;
    let name = getState().press.allowed[link];
    return {link, name}
  })

  let willFilter = !getState().filter.tag[tag]

  dispatch(updatePress(pressList, willFilter ? 'delete' : 'add'))

  dispatch({
    type: type.TOGGLE_TAG_FILTER,
    payload: tag,
  })
}


export const setTimeFilter = (time) => ({
  type: type.SET_TIME_FILTER,
  payload: time,
})


/**
 * @param {Object} emailList ex){"Me": "lpoeh01@gmail.com"}
 */
export const addSubscription = emailList => ({
  type: type.ADD_SUBSCRIPTION,
  payload: emailList,
})


/**
 * @param {Array} nameList ex) ["Me", "Another Me"]
 */
export const deleteSubscription = nameList => ({
  type: type.DELETE_SUBSCRIPTION,
  payload: nameList,
})


/**
 * At least one prop is required.
 * @param {Boolean} setting.press
 * @param {Boolean} setting.tag
 * @param {Boolean} setting.time
 */
export const setFilterConf = (setting) => ({
  type: type.SET_FILTER_CONF,
  payload: setting,
})


/**
 * At least one prop is required.
 * @param {Boolean} setting.auto
 * @param {Number} setting.time
 */
export const setUpdateConf = (setting) => ({
  type: type.SET_UPDATE_CONF,
  payload: setting,
})


export const toggleFilterConf = targetFilters => ({
  type: type.TOGGLE_FILTER_CONF,
  payload: targetFilters,
})

