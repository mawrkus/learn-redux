const usersActions = require('./usersActions');
const usersReducer = require('./usersReducer');

module.exports = {
  ...usersActions,
  usersReducer,
};
