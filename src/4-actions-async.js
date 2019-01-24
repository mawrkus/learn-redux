const {
  createStore,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const thunk = require('redux-thunk').default;

const reducer = require('./reducers');

const {
  like,
  dislike,
  addComment,
} = require('./actions');

const addCommentAsync = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addComment(text));
    }, 1000);
  };
};

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addCommentAsync('It gets really interesting!'));
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(addCommentAsync('Boom.'));
store.dispatch(addComment('Im-pre-ssive!!!'));
