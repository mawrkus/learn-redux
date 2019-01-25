const { ACTIONS_FETCH } = require('./fetchActions');
const {
  ACTIONS_MESSAGES,
  displayErrorMsg,
} = require('./messagesActions');

const ACTIONS_USERS = {
  DISPLAY_LIST: Symbol('display users list'),
  DISPLAY_SINGLE: Symbol('display single user'),
};

const displayUsers = ({ users }) => ({
  type: ACTIONS_USERS.DISPLAY_LIST,
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
        successAction: ({ data }) => displayUsers({ users: data }),
        errorAction: ({ error }) => displayErrorMsg({ text: `GET ${url} -> ${error}` }),
      },
    },
  };
};

const displayUser = ({ user }) => ({
  type: ACTIONS_USERS.DISPLAY_SINGLE,
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
        successAction: ({ data }) => displayUsers({ user: data }),
        errorAction: ({ error }) => displayErrorMsg({ text: `GET ${url} -> ${error}` }),
      },
    },
  };
};

module.exports = {
  ACTIONS_USERS,
  fetchUsers,
  fetchUser,
};
