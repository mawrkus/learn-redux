const { createStore, combineReducers, applyMiddleware } = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const { loggerMiddleware, fetchMiddleware } = require('./middlewares');

const { fetchUsers, fetchUser, usersReducer } = require('./users');
const { fetchReducer } = require('./fetch');
const { messagesReducer } = require('./messages');

const reducer = combineReducers({
  users: usersReducer,
  fetch: fetchReducer,
  messages: messagesReducer,
});

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

// store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(fetchUsers({ limit: 3 }));
store.dispatch(fetchUser({ id: 1 }));
store.dispatch(fetchUser({ id: 42 })); // does not exist
