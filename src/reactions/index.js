const reactionsActions = require('./reactionsActions');
const reactionsReducer = require('./reactionsReducer');

module.exports = {
  ...reactionsActions,
  reactionsReducer,
};
