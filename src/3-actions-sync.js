const {
  createStore,
  combineReducers,
} = require('redux');

const {
  like,
  dislike,
  addComment,
} = require('./actions');

const {
  reactions,
  comments,
} = require('./reducers');

const reducer = combineReducers({ reactions, comments });

const initialState = { reactions: { likes: 1000, dislikes: 0 } };

const store = createStore(reducer, initialState);

console.log('__________________________________________________________________________________');
console.log('Demo #3: sync actions');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(addComment({ text: 'Yey! So cool :D' }));
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addComment({ text: 'Im-pre-ssive!!!' }));
