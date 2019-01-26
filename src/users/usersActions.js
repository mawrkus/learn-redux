const { ACTIONS_FETCH } = require('../fetch');
const { uiNotificationsActionCreators } = require('../ui-notifications');

const { showMessage } = uiNotificationsActionCreators;

const ACTIONS_USERS = {
  UPDATE_USERS_LIST: Symbol('update users list'),
  UPDATE_USER: Symbol('update single user'),
};

const updateUsers = ({ users }) => ({
  type: ACTIONS_USERS.UPDATE_USERS_LIST,
  payload: {
    users,
  },
});

const fetchUsers = ({ limit }) => {
  const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;

  return {
    type: ACTIONS_FETCH.REQUEST,
    payload: {
      url,
      meta: {
        resource: 'users',
        successAction: ({ data }) => [
          showMessage({ info: 'Success: users fetched!', duration: 50 }),
          updateUsers({ users: data }),
        ],
        errorAction: ({ error }) => showMessage({
          error: `Error fetching users! ${error.msg}`,
          duration: 2000,
        }),
      },
    },
  };
};

const updateUser = ({ user }) => ({
  type: ACTIONS_USERS.UPDATE_USER,
  payload: {
    user,
  },
});

const fetchUser = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return {
    type: ACTIONS_FETCH.REQUEST,
    payload: {
      url,
      meta: {
        resource: 'user',
        id,
        successAction: ({ data }) => [
          showMessage({ info: 'Success: user fetched!', duration: 50 }),
          updateUser({ user: data }),
        ],
        errorAction: ({ error }) => showMessage({
          error: `Error fetching user! ${error.msg}`,
          duration: 2000,
        }),
      },
    },
  };
};

module.exports = {
  ACTIONS_USERS,
  usersActionCreators: {
    fetchUsers,
    fetchUser,
  },
};
