const {
  createStore,
  combineReducers,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const {
  loggerMiddleware,
} = require('./middlewares');

const {
  like,
  dislike,
  addComment,
  undo,
  redo,
  clear,
} = require('./actions');

const {
  reactions,
  comments,
} = require('./reducers');

const {
  history,
} = require('./enhancers');

const reducer = history(combineReducers({ reactions, comments }));

const store = createStore(
  reducer,
  applyMiddleware(
    // Order IS important
    reduxThunkMiddleware,
    loggerMiddleware,
  ),
);

console.log('__________________________________________________________________________________');
console.log('Demo #7: reducer enhancer');
console.log('__________________________________________________________________________________');

// store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(addComment({ text: 'Yey! So cool :D' }));
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addComment({ text: 'Im-pre-ssive!!!' }));

store.dispatch(redo());
//store.dispatch(clear());
