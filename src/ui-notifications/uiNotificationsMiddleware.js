const { ACTIONS_UI_NOTIFICATIONS, uiNotificationsActionCreators } = require('./uiNotificationsActions');

const { hideNotification } = uiNotificationsActionCreators;
const { SHOW_INFO, SHOW_ERROR } = ACTIONS_UI_NOTIFICATIONS;

const timeoutIds = {
  [SHOW_INFO]: null,
  [SHOW_ERROR]: null,
};

const uiNotificationsMiddleware = ({ dispatch }) => next => action => {
  next(action);

  const { type, payload } = action;
  const isShowNotificationType = type === SHOW_INFO || type === SHOW_ERROR;

  if (!isShowNotificationType || payload.duration <= 0) {
    return;
  }

  if (timeoutIds[type]) {
    clearTimeout(timeoutIds[type]);
    timeoutIds[type] = null;
  }

  timeoutIds[type] = setTimeout(() => dispatch(hideNotification({
    type: type === SHOW_ERROR ? 'error' : 'info',
  })),
  payload.duration);
};

module.exports = uiNotificationsMiddleware;
