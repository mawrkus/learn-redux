const uiNotificationsActions = require('./uiNotificationsActions');
const uiNotificationsReducer = require('./uiNotificationsReducer');
const uiNotificationsMiddleware = require('./uiNotificationsMiddleware');

module.exports = {
  ...uiNotificationsActions,
  uiNotificationsReducer,
  uiNotificationsMiddleware,
};
