const usersActions = require('./usersActions');
const usersReducer = require('./usersReducer');
const usersMiddleware = require('./usersMiddleware');
const userMiddleware = require('./userMiddleware');

module.exports = {
  ...usersActions,
  usersReducer,
  usersMiddleware,
  userMiddleware,
};
