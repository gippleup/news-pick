import time from '../../reference/time'

const initialState = {
  press: {
    // '조선일보': true,
    // '동아일보': true,
    // '매일경제': false,
    // '한국경제': false,
  },
  time: time.minute(60),
  tag: {
    // '코로나': false,
    // '박쥐': false,
    // '이명박': true,
  },
}

function filter(state=initialState, action) {
  return state;
}

export default filter