const usersActions = require('./usersActions');
const usersReducer = require('./usersReducer');
const usersMiddleware = require('./usersMiddleware');

module.exports = {
  ...usersActions,
  usersReducer,
  usersMiddleware,
};
