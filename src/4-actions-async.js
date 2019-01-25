const {
  createStore,
  combineReducers,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const {
  comments,
  fetch,
} = require('./reducers');
const {
  addComment,
  fetchComment,
} = require('./actions');

const reducer = combineReducers({ comments, fetch });

const store = createStore(
  reducer,
  applyMiddleware(reduxThunkMiddleware),
);

console.log('__________________________________________________________________________________');
console.log('Demo #4: async actions');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(fetchComment());
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(fetchComment());
store.dispatch(addComment('Im-pre-ssive!!!'));
