const {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const { commentsActionCreators, commentsReducer } = require('./comments');

const reducer = combineReducers({ comments: commentsReducer });

const store = createStore(
  reducer,
  applyMiddleware(reduxThunkMiddleware),
);

const { addComment, addCommentAsync } = bindActionCreators(commentsActionCreators, store.dispatch);

console.log('__________________________________________________________________________________');
console.log('Demo #5: bind action creators');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

addCommentAsync();
addComment({ text: 'Yey! So cool :D' });
addCommentAsync();
addComment({ text: 'Im-pre-ssive!!!' });
