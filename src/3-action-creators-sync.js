const { createStore, combineReducers } = require('redux');

const { reactionsActionCreators, reactionsReducer } = require('./reactions');
const { commentsActionCreators, commentsReducer } = require('./comments');

const { like, dislike } = reactionsActionCreators;
const { addComment } = commentsActionCreators;

const reducer = combineReducers({
  reactions: reactionsReducer,
  comments: commentsReducer,
});

const initialState = { reactions: { likes: 1000, dislikes: 0 } };

const store = createStore(reducer, initialState);

console.log('__________________________________________________________________________________');
console.log('Demo #3: sync action creators (with initial state)');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(addComment({ text: 'Yey! So cool :D' }));
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addComment({ text: 'Im-pre-ssive!!!' }));
