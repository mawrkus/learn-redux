const reactionsActions = require('./reactionsActions');
const commentsActions = require('./commentsActions');
const fetchActions = require('./fetchActions');
const usersActions = require('./usersActions');
const messagesActions = require('./messagesActions');
const historyActions = require('./historyActions');

module.exports = {
  ...reactionsActions,
  ...commentsActions,
  ...fetchActions,
  ...usersActions,
  ...historyActions,
};
