const reactionsActions = require('./reactionsActions');
const commentsActions = require('./commentsActions');
const fetchActions = require('./fetchActions');
const usersActions = require('./usersActions');
const messagesActions = require('./messagesActions');

module.exports = {
  ...reactionsActions,
  ...commentsActions,
  ...fetchActions,
  ...usersActions,
};
