const { createStore, combineReducers, applyMiddleware } = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const { loggerMiddleware } = require('./middlewares');

const { like, dislike, reactionsReducer } = require('./reactions');
const { addComment, commentsReducer } = require('./comments');
const {
  undo,
  redo,
  clear,
  historyEnhancer,
} = require('./history');

const reducer = historyEnhancer(combineReducers({
  reactions: reactionsReducer,
  comments: commentsReducer,
}));

loggerMiddleware.pretty = true;

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
store.dispatch(undo());
store.dispatch(undo());
store.dispatch(undo());
store.dispatch(undo());
store.dispatch(undo());
store.dispatch(undo());
store.dispatch(undo());
store.dispatch(undo());
store.dispatch(redo());
store.dispatch(redo());
store.dispatch(redo());
store.dispatch(clear());
