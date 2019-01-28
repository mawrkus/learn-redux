const ACTIONS_UI_NOTIFICATIONS = {
  SHOW_INFO: Symbol('show info notification'),
  HIDE_INFO: Symbol('hide info notification'),
  SHOW_ERROR: Symbol('show error notification'),
  HIDE_ERROR: Symbol('hide error notification'),
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
