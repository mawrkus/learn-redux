const {
  createStore,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const {
  loggerMiddleware,
  fetchMiddleware,
} = require('./middlewares');

const reducer = require('./reducers');

const {
  addComment,
  fetchComment,
} = require('./actions');

const store = createStore(
  reducer,
  applyMiddleware(
    // Order IS important
    reduxThunkMiddleware,
    loggerMiddleware,
  ),
);

console.log('__________________________________________________________________________________');
console.log('Demo #5: middlewares');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(fetchComment());
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(fetchComment());
store.dispatch(addComment('Im-pre-ssive!!!'));
