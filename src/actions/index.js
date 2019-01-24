const reactionsActions = require('./reactionsActions');
const commentsActions = require('./commentsActions');
const fetchActions = require('./fetchActions');

module.exports = {
  ...reactionsActions,
  ...commentsActions,
  ...fetchActions,
};
