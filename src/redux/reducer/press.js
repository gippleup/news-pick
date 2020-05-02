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
          // filtered: false,
          host: press.link,
        }
      })
      return newState;
    }

    case type.ADD_PRESS: {
      let pressList = action.payload;
      pressList.forEach((press) => {
        newState.allowed[press.link] = press.name;
      })
      return newState;
    }

    case type.DELETE_PRESS: {
      let pressList = action.payload;
      pressList.forEach((press) => {
        delete newState.allowed[press.link];
        delete newState.existing[press.name];
      })
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default press;