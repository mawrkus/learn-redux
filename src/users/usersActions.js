const { ACTIONS_FETCH } = require('../fetch');
const { messagesActionCreators } = require('../messages');

const { displayErrorMsg } = messagesActionCreators;

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
    type: ACTIONS_FETCH.FETCH_REQUEST,
    payload: {
      url,
      meta: {
        resource: 'users',
        successAction: ({ data }) => updateUsers({ users: data }),
        errorAction: ({ error }) => displayErrorMsg({ text: `GET ${url} -> ${error}` }),
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
    type: ACTIONS_FETCH.FETCH_REQUEST,
    payload: {
      url,
      meta: {
        resource: 'user',
        id,
        successAction: ({ data }) => updateUser({ user: data }),
        errorAction: ({ error }) => displayErrorMsg({ text: `GET ${url} -> ${error}` }),
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
