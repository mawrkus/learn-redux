const { ACTIONS_FETCH } = require('./fetchActions');
const { ACTIONS_MESSAGES } = require('./messagesActions');

const ACTIONS_USERS = {
  DISPLAY_LIST: Symbol('display users list'),
  DISPLAY_SINGLE: Symbol('display single user'),
};

const fetchUsers = ({ limit }) => {
  return {
    type: ACTIONS_FETCH.FETCH_REQUEST,
    payload: {
      url: `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
      msg: {
        label: 'Fetching users...',
      },
      successAction: ({ data }) => ({ type: ACTIONS_USERS.DISPLAY_LIST, users: data }),
      errorAction: ({ method, url, error }) => ({
        type: ACTIONS_MESSAGES.DISPLAY,
        payload: {
          error: `${method} ${url} -> ${error}`,
        },
      }),
    },
  };
};

const fetchUser = ({ id }) => {
  return {
    type: ACTIONS_FETCH.FETCH_REQUEST,
    payload: {
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      msg: {
        label: 'Fetching single user...',
      },
      successAction: ({ data }) => ({ type: ACTIONS_USERS.DISPLAY_SINGLE, user: data }),
      errorAction: ({ method, url, error }) => ({
        type: ACTIONS_MESSAGES.DISPLAY,
        payload: {
          error: `${method} ${url} -> ${error}`,
        },
      }),
    },
  };
};

module.exports = {
  ACTIONS_USERS,
  fetchUsers,
  fetchUser,
};
