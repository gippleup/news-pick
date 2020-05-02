import * as type from '../action/type'


const initialState = {};

function query(state=initialState, action) {
  let newState = {...state};
  switch(action.type) {
    case type.CLEAR_ALL_QUERY: {
      newState = {};
      return newState;
    }
    case type.ADD_QUERY: {
      let keyword = action.payload;
      newState[keyword] = true;
      return newState;
    }
    case type.DELETE_QUERY: {
      let keyword = action.payload;
      delete newState[keyword];
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default query;