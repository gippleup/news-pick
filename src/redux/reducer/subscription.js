import * as type from '../action/type'

const initialState = {
  emails: {
    "나": "lpoeh01@gmail.com"
  }
}


function subscription(state=initialState, action) {
  let newState = {
    emails: {...state.emails}
  }

  switch(action.type) {
    case type.ADD_SUBSCRIPTION: {
      let emailList = action.payload;
      Object.keys(emailList).forEach((name) => {
        newState.emails[name] = emailList[name];
      })
      return newState;
    }
    case type.DELETE_SUBSCRIPTION: {
      let nameList = action.payload;
      nameList.forEach((name) => {
        if (newState.emails[name]) {
          delete newState.emails[name]
        }
      })
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default subscription;