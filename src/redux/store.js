import reducers from './reducer/_index';
const redux = require('redux');
const thunk = require('redux-thunk').default

const customMiddleware = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
}

const store = redux.createStore(
  reducers,
  redux.applyMiddleware(
    thunk,
    customMiddleware
  )
)

const unsubscribe = store.subscribe(()=>{console.log(store.getState())})

export default store;
