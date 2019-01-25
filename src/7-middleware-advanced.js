const {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

const { loggerMiddleware, fetchMiddleware } = require('./middleware');

const { usersActionCreators, usersReducer } = require('./users');
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

const { fetchUsers, fetchUser } = bindActionCreators(usersActionCreators, store.dispatch);

console.log('__________________________________________________________________________________');
console.log('Demo #7: advanced middleware');
console.log('__________________________________________________________________________________');

// store.subscribe(() => console.log('Store updated!', store.getState()));

fetchUsers({ limit: 3 });
fetchUser({ id: 1 });
fetchUser({ id: 42 }); // does not exist
