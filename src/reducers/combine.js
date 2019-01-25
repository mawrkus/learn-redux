const {
  combineReducers,
} = require('redux');

const reactions = require('./reactionsReducer');
const comments = require('./commentsReducer');
const fetch = require('./fetchReducer');
const users = require('./usersReducer');
const messages = require('./messagesReducer');

const reducer = combineReducers({ reactions, comments, users, messages, fetch });

module.exports = reducer;
