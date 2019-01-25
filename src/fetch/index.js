const fetchActions = require('./fetchActions');
const fetchReducer = require('./fetchReducer');

module.exports = {
  ...fetchActions,
  fetchReducer,
};
