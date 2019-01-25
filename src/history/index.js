const historyActions = require('./historyActions');
const historyEnhancer = require('./historyEnhancer');

module.exports = {
  ...historyActions,
  historyEnhancer,
};
