const {
  createStore,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const reducer = require('./reducers');

const {
  like,
  dislike,
  addComment,
} = require('./actions');

const addCommentAsync = (text, ms) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(addComment(text));
    }, ms);
  };
};

const store = createStore(
  reducer,
  applyMiddleware(reduxThunkMiddleware),
);

console.log('__________________________________________________________________________________');
console.log('Demo #4: async actions');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addCommentAsync('It gets really interesting!', 1000));
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(addCommentAsync('Boom.', 720));
store.dispatch(addComment('Im-pre-ssive!!!'));
