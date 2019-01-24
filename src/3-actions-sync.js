const {
  createStore,
} = require('redux');

const reducer = require('./reducers');

const {
  like,
  dislike,
  addComment,
} = require('./actions');

const store = createStore(reducer);

console.log('__________________________________________________________________________________');
console.log('Demo #3: sync actions');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(addComment('Im-pre-ssive!!!'));
