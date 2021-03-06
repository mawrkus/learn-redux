const { fetchActionCreators } = require('../fetch');

const { fetchRequest } = fetchActionCreators;

const ACTIONS_USERS = {
  UPDATE_USERS: Symbol('users:update'),
  UPDATE_USER: Symbol('user:update'),
};

const fetchUsers = ({ limit }) => {
  const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;

  return fetchRequest({
    url,
    meta: {
      resource: 'users',
    },
  });
};

const updateUsers = ({ users }) => ({
  type: ACTIONS_USERS.UPDATE_USERS,
  payload: {
    users,
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

const updateUser = ({ user }) => ({
  type: ACTIONS_USERS.UPDATE_USER,
  payload: {
    user,
  },
});

module.exports = {
  ACTIONS_USERS,
  usersActionCreators: {
    fetchUsers,
    updateUsers,
    fetchUser,
    updateUser,
  },
};
