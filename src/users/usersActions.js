const { fetchActionCreators } = require('../fetch');

const { fetchRequest } = fetchActionCreators;

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

  return fetchRequest({
    url,
    meta: {
      resource: 'users',
    },
  });
};

const updateUser = ({ user }) => ({
  type: ACTIONS_USERS.UPDATE_USER,
  payload: {
    user,
  },
});

const fetchUser = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  return fetchRequest({
    url,
    meta: {
      resource: 'user',
      id,
    },
  });
};

module.exports = {
  ACTIONS_USERS,
  usersActionCreators: {
    fetchUsers,
    updateUsers,
    fetchUser,
    updateUser,
  },
};
