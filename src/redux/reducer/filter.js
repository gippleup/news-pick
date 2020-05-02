import time from '../../reference/time'
import * as type from '../action/type'

const initialState = {
  press: {
    // '조선일보': true,
    // '한국경제': false,
  },
  time: time.minute(60),
  tag: {
    // '코로나': false,
    // '이명박': true,
  },
}

function filter(state=initialState, action) {
  let newState = {
    press: {...state.press},
    time: state.time,
    tag: {...state.tag}
  }
  switch(action.type) {
    case type.TOGGLE_TAG_FILTER: {
      let tag = action.payload;
      newState.tag[tag] = !state.tag[tag]
      return newState;
    }
    case type.TOGGLE_PRESS_FILTER: {
      let press = action.payload;
      newState.press[press] = !state.press[press]
      return newState;
    }
    case type.SET_TIME_FILTER: {
      let time = action.payload;
      newState.time = time;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default filter