const ACTIONS_UI_NOTIFICATIONS = {
  SHOW_INFO: Symbol('notifications:info:show'),
  HIDE_INFO: Symbol('notifications:info:hide'),
  SHOW_ERROR: Symbol('notifications:error:show'),
  HIDE_ERROR: Symbol('notifications:error:hide'),
};

const showNotification = ({ type, text, duration }) => {
  return {
    type: type === 'error'
      ? ACTIONS_UI_NOTIFICATIONS.SHOW_ERROR
      : ACTIONS_UI_NOTIFICATIONS.SHOW_INFO,
    payload: {
      text,
      duration,
    },
  };
};

const hideNotification = ({ type }) => {
  return {
    type: type === 'error'
      ? ACTIONS_UI_NOTIFICATIONS.HIDE_ERROR
      : ACTIONS_UI_NOTIFICATIONS.HIDE_INFO,
  };
};

module.exports = {
  ACTIONS_UI_NOTIFICATIONS,
  uiNotificationsActionCreators: {
    showNotification,
    hideNotification,
  },
};
