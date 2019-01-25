const messagesActions = require('./messagesActions');
const messagesReducer = require('./messagesReducer');

module.exports = {
  ...messagesActions,
  messagesReducer,
};
