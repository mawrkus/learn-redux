const commentsActions = require('./commentsActions');
const commentsReducer = require('./commentsReducer');

module.exports = {
  ...commentsActions,
  commentsReducer,
};
