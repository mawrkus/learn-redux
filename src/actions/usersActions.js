const { ACTIONS_FETCH } = require('./fetchActions');
const { ACTIONS_MESSAGES } = require('./messagesActions');

const ACTIONS_USERS = {
  DISPLAY_LIST: Symbol('display users list'),
  DISPLAY_SINGLE: Symbol('display single user'),
};

const fetchUsers = ({ limit }) => {
  const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;

  return {
    type: ACTIONS_FETCH.FETCH_REQUEST,
    payload: {
      url,
      msg: `Fetching ${limit} users...`,
      successAction: ({ data }) => ({
        type: ACTIONS_USERS.DISPLAY_LIST,
        payload: {
          users: data,
        },
      }),
      errorAction: ({ error }) => ({
        type: ACTIONS_MESSAGES.DISPLAY_ERROR,
        payload: {
          text: `GET ${url} -> ${error}`,
        },
      }),
    },
  };
};

const fetchUser = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return {
    type: ACTIONS_FETCH.FETCH_REQUEST,
    payload: {
      url,
      msg: `Fetching user id=${id}...`,
      successAction: ({ data }) => ({
        type: ACTIONS_USERS.DISPLAY_SINGLE,
        payload: {
          user: data,
        },
      }),
      errorAction: ({ error }) => ({
        type: ACTIONS_MESSAGES.DISPLAY_ERROR,
        payload: {
          text: `GET ${url} -> ${error}`,
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
