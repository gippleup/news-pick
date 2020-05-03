import time from '../../reference/time'
import * as type from '../action/type'

const initialState = {
  filter: {
    press: true,
    tag: true,
    time: true,
  },
  update: {
    auto: true,
    interval: time.minute(0.1),
  }
}


function conf(state = initialState, action) {
  let newState = {
    filter: {...state.filter},
    update: {...state.update}
  }
  switch(action.type) {
    case type.TOGGLE_FILTER_CONF: {
      let targets = action.payload;
      targets.forEach((target) => {
        let prevState = !state.filter[target];
        newState.filter[target] = !prevState;
      })
      return newState;
    }
    case type.SET_FILTER_CONF: {
      let newFilter = action.payload;
      Object.assign(newState.filter, newFilter)
      return newState;
    }
    case type.SET_UPDATE_CONF: {
      let newFilter = action.payload;
      Object.assign(newState.update, newFilter)
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default conf;