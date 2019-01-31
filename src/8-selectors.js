const {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

const { multiMiddleware } = require('./middleware');
const { fetchMiddleware } = require('./fetch');

const {
  usersActionCreators,
  usersReducer,
  usersMiddleware,
} = require('./users');

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(
    multiMiddleware,
    fetchMiddleware,
    usersMiddleware,
  ),
);

const { fetchUsers } = bindActionCreators(usersActionCreators, store.dispatch);

const getUsersList = state => Object.values(state.users.list)
  .map(({ id, name, email }) => ({ id, name, email }));

const getBizUsersList = state => getUsersList(state)
  .filter(({ email }) => /.+\.biz$/.test(email));

console.log('__________________________________________________________________________________');
console.log('Demo #8: selectors');
console.log('__________________________________________________________________________________');

store.subscribe(() => {
  const state = store.getState();
  console.log('Store updated!', state);

  const users = getUsersList(state);
  console.log('All users ->', users);

  const bizUsers = getBizUsersList(state);
  console.log('Biz users only ->', bizUsers);
});

fetchUsers({ limit: 10 });
