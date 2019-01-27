const {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const { default: reduxThunkMiddleware } = require('redux-thunk');

const { loggerMiddleware, fetchMiddleware, multiMiddleware } = require('./middleware');

const { usersActionCreators, usersReducer } = require('./users');
const { uiNotificationsReducer } = require('./ui-notifications');
const { uiLoaderReducer, uiLoaderMiddleware } = require('./ui-loader');

const reducer = combineReducers({
  users: usersReducer,
  notifications: uiNotificationsReducer,
  loader: uiLoaderReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(
    // Order IS important
    reduxThunkMiddleware,
    multiMiddleware,
    loggerMiddleware,
    uiLoaderMiddleware,
    fetchMiddleware,
  ),
);

const { fetchUsers, fetchUser } = bindActionCreators(usersActionCreators, store.dispatch);

console.log('__________________________________________________________________________________');
console.log('Demo #7: advanced middleware');
console.log('__________________________________________________________________________________');

// store.subscribe(() => console.log('Store updated!', store.getState()));

fetchUsers({ limit: 2 });
fetchUser({ id: 1 });
fetchUser({ id: 42 }); // does not exist
