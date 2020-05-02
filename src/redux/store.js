import reducers from './reducer/_index';
const redux = require('redux');
const thunk = require('redux-thunk').default

const customMiddleware = store => next => action => {
  console.log("Middleware triggered:", action.type);
  next(action);
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : redux.compose;

const enhancer = composeEnhancers(
  redux.applyMiddleware(
    thunk,
    customMiddleware
  )
)

const store = redux.createStore(
  reducers,
  enhancer
)

const unsubscribe = store.subscribe(()=>{console.log(store.getState())})

export default store;
