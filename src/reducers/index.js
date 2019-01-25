const reactions = require('./reactionsReducer');
const comments = require('./commentsReducer');
const fetch = require('./fetchReducer');
const users = require('./usersReducer');
const messages = require('./messagesReducer');

module.exports = {
  reactions,
  comments,
  fetch,
  users,
  messages,
};
