import * as type from '../action/type'
import * as pressList from '../../reference/pressList'

const initialState = {
  allowed: pressList.linkToPress,
  existing: {
    매일경제: {
      host: "news.mk.co.kr"
    },
    조선일보: {
      host: "news.chosun.com"
    }
  }
}

function press(state=initialState, action) {
  let newState = {
    allowed: {...state.allowed},
    existing: {...state.existing}
  };
  switch(action.type) {
    case type.UPDATE_PRESS: {
      let pressList = action.payload;
      pressList.forEach(press => {
        if (state.existing[press.name]) return;
        newState.existing[press.name] = {
          filtered: false,
          host: press.url,
        }
      })
      return newState;
    }

    case type.ADD_PRESS: {
      let {name, link} = action.payload;
      newState.allowed[link] = name;
      return newState;
    }

    case type.DELETE_PRESS: {
      let link = action.payload;
      delete newState.allowed[link]
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default press;