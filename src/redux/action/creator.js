import func from './functions'
import * as type from './type'
import url from 'url'

export const fetchNews = (queries, display, start, sort) => async (dispatch, getState) => {
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
  .reduce((acc, block) => acc.concat(block))
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
  let hosts = filteredItems.map(
    items => items
    .map(item => {
      let host = getHost(item)
      return {
        url: host,
        name: allowedPress[host],
      }
    })
  ).reduce((acc, ele) => acc.concat(ele), [])

  /* Dispatch action: UPDATE_PRESS */
  dispatch({
    type: type.UPDATE_PRESS,
    payload: hosts,
  })
}


export const deleteNews = (keyword, itemLink) => ({
  type: type.DELETE_NEWS,
  payload: {
    keyword,
    itemLink,
  }
})


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


export const addPress = ({name, link}) => ({
  type: type.ADD_PRESS,
  payload: {name, link}
})



export const deletePress = (link) => ({
  type: type.DELETE_PRESS,
  payload: link,
})



export const togglePressFilter = (link) => ({
  type: type.TOGGLE_PRESS_FILTER,
  payload: link,
})



export const toggleTagFilter = (tag) => ({
  type: type.TOGGLE_TAG_FILTER,
  payload: tag,
})



export const setTimeFilter = (time) => ({
  type: type.SET_TIME_FILTER,
  payload: time,
})



export const addSubscription = (email, name) => ({
  type: type.ADD_SUBSCRIPTION,
  payload: {email, name},
})



export const deleteSubscription = (email) => ({
  type: type.DELETE_SUBSCRIPTION,
  payload: email,
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

