import * as type from '../action/type'

const initialState = {
  emails: {
    "lpoeh01@gmail.com":"나"
  }
}


function subscription(state=initialState, action) {
  let newState = {...state}

  switch(action.type) {
    case type.ADD_SUBSCRIPTION: {
      let {email, name} = action.payload;
      newState.emails[email] = name;
      return newState;
    }
    case type.DELETE_SUBSCRIPTION: {
      let email = action.payload;
      delete newState.emails[email];
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default subscription;