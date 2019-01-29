const {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

const { loggerMiddleware, multiMiddleware } = require('./middleware');
const { fetchMiddleware } = require('./fetch');

const {
  usersActionCreators,
  usersReducer,
  usersMiddleware,
} = require('./users');

const { uiNotificationsReducer, uiNotificationsMiddleware } = require('./ui-notifications');
const { uiLoaderReducer, uiLoaderMiddleware } = require('./ui-loader');

const reducer = combineReducers({
  users: usersReducer,
  notifications: uiNotificationsReducer,
  loader: uiLoaderReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(
    multiMiddleware,
    loggerMiddleware,
    uiLoaderMiddleware,
    fetchMiddleware,
    usersMiddleware,
    uiNotificationsMiddleware,
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
