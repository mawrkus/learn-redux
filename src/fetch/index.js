const fetchActions = require('./fetchActions');
const fetchMiddleware = require('./fetchMiddleware');

module.exports = {
  ...fetchActions,
  fetchMiddleware,
};
