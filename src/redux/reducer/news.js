import * as type from '../action/type'

const initialState = {
  keywords: {
  },
  links: {
  }
}


export const FETCH_NEWS = 'FETCH_NEWS';

const news = (state=initialState, action) => {
  let newState = {
    keywords: {
      ...state.keywords
    },
    links: {
      ...state.links
    }
  };

  switch(action.type) {
    case type.FETCH_NEWS: {
      let {keywordBlocks, newLinks} = action.payload;
      Object.keys(keywordBlocks).forEach(keyword => {
        if (!state.keywords[keyword]) {
          newState.keywords[keyword] = keywordBlocks[keyword];
        } else {
          let prevItems = state.keywords[keyword].items;
          let newBlock = keywordBlocks[keyword];
          Object.assign(newState.keywords[keyword], {
            items: prevItems.concat(newBlock.items),
            lastBuildDate: newBlock.lastBuildDate,
            total: newBlock.total,
          })
        }
      })
      Object.assign(newState.links, newLinks);
      return newState;
    }

    case type.DELETE_NEWSBLOCK: {
      let {keyword, items} = action.payload;
      if (!newState.keywords[keyword]) return newState;
      delete newState.keywords[keyword]
      items.forEach((item) => {
        delete newState.links[item.originallink]
      })
      return newState;
    }

    case type.DELETE_NEWS: {
      let {keyword, itemLink} = action.payload;
      if (!newState.keywords[keyword]) return newState;
      let existingItems = state.keywords[keyword].items;
      let filteredItem = existingItems.filter(item => item.originallink !== itemLink)
      newState.keywords[keyword].items = filteredItem;
      return newState;
    }

    case type.ADD_NEWS: {
      let {keyword, item} = action.payload;
      if (!newState.keywords[keyword]) {
        newState.keywords[keyword] = {
          items: [],
        };
      }
      newState.keywords[keyword].items.push(item);
      return newState;
    }

    default:
      return state
  }
}

export default news;