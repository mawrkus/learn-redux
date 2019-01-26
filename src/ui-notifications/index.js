const uiNotificationsActions = require('./uiNotificationsActions');
const uiNotificationsReducer = require('./uiNotificationsReducer');

module.exports = {
  ...uiNotificationsActions,
  uiNotificationsReducer,
};
