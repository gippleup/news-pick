import time from '../reference/time'

const initialState = {
  news: {
    keywords: {},
    links: {},
  },
  press: [],
  filter: {
    press: {},
    time: time.minute(60),
    tag: {},
  },
  subscription: {
    emails: {},
  },
  conf: {
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
}

export default initialState;