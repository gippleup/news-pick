import reducers from './reducer/_index';
const redux = require('redux');
const thunk = require('redux-thunk').default

const store = redux.createStore(
  reducers,
  redux.applyMiddleware(thunk)
)

const unsubscribe = store.subscribe(()=>{console.log(store.getState())})

export default store;
