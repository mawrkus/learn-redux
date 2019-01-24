const {
  createStore,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const ReduxThunk = require('redux-thunk').default;
const logger = require('./middlewares/logger');

const reducer = require('./reducers');

const {
  like,
  dislike,
  addComment,
  addCommentAsync,
} = require('./actions');

const store = createStore(
  reducer,
  applyMiddleware(
    ReduxThunk,
    logger,
  ),
);

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addCommentAsync('It gets really interesting!', 1000));
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(addCommentAsync('Boom.', 720));
store.dispatch(addComment('Im-pre-ssive!!!'));
