import time from '../../reference/time'

const initialState = {
  filter: {
    press: true,
    tag: true,
    time: true,
  },
  update: {
    auto: true,
    interval: time.minute(5),
  }
}


function conf(state = initialState, action) {
  return state
}

export default conf;