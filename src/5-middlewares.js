const { createStore, combineReducers, applyMiddleware } = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const { loggerMiddleware } = require('./middlewares');

const { addComment, addCommentAsync, commentsReducer } = require('./comments');

const reducer = combineReducers({ comments: commentsReducer });

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

// store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(addCommentAsync());
store.dispatch(addComment({ text: 'Yey! So cool :D' }));
store.dispatch(addCommentAsync());
store.dispatch(addComment({ text: 'Im-pre-ssive!!!' }));
