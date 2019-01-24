const {
  createStore,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const {
  loggerMiddleware,
  fetchMiddleware,
} = require('./middlewares');

const reducer = require('./reducers');

const {
  like,
  dislike,
  addComment,
  addCommentAsync,
  fetch,
} = require('./actions');

const store = createStore(
  reducer,
  applyMiddleware(
    // Order IS important
    reduxThunkMiddleware,
    loggerMiddleware,
    fetchMiddleware,
  ),
);

console.log('__________________________________________________________________________________');
console.log('Demo #6: middlewares advanced');
console.log('__________________________________________________________________________________');

store.dispatch(fetch({
  url: 'https://jsonplaceholder.typicode.com/users?_limit=3',
  successAction: users => ({ type: 'USERS_DISPLAY', users }),
}));

store.dispatch(fetch({
  url: 'https://jsonplaceholder.typicode.com/users/10',
  successAction: user => ({ type: 'USER_DISPLAY', user }),
}));

store.dispatch(fetch({
  url: 'https://jsonplaceholder.typicode.com/users/42', // does not exist
  successAction: user => ({ type: 'USER_DISPLAY', user }),
  errorAction: ({ method, url, error }) => ({
    type: 'ERRORS_DISPLAY',
    error: `${method} ${url} -> ${error}`,
  }),
}));
