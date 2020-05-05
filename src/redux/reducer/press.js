import * as type from '../action/type'
import * as pressList from '../../reference/pressList'

const initialState = {
  allowed: pressList.linkToPress,
  existing: {
    // 매일경제: {
    //   host: "news.mk.co.kr",
    //   count: 0,
    // },
    // 조선일보: {
    //   host: "news.chosun.com",
    //   count: 0,
    // }
  }
}

function press(state=initialState, action) {
  let newState = {
    allowed: {...state.allowed},
    existing: {...state.existing}
  };

  switch(action.type) {
    case type.UPDATE_PRESS: {
      let {pressList, updateType} = action.payload;
      let {existing} = newState;

      let modifyCount = (symbol) => {
        pressList.forEach((press) => {
          let {name} = press;
          existing[name] ? 
            symbol === 'plus' ? 
              (existing[name].count += 1) : 
              (existing[name].count -= 1)
            : symbol === 'plus' ?
              (existing[name] = {count: 1}) : 
              (console.error("Such press doesnt' exist"))
        })
      }

      let addCount = () => modifyCount('plus');
      let subtractCount = () => modifyCount('minus');

      updateType === 'add' ? addCount() : subtractCount();

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