const { ACTIONS_UI_NOTIFICATIONS } = require('./uiNotificationsActions');

const uiNotificationsReducer = (state = { info: '', error: '' }, action) => {
  switch (action.type) {
    case ACTIONS_UI_NOTIFICATIONS.SHOW_INFO:
      return {
        ...state,
        info: action.payload.text,
      };

    case ACTIONS_UI_NOTIFICATIONS.HIDE_INFO:
      return {
        ...state,
        info: '',
      };

    case ACTIONS_UI_NOTIFICATIONS.SHOW_ERROR:
      return {
        ...state,
        error: action.payload.text,
      };

    case ACTIONS_UI_NOTIFICATIONS.HIDE_ERROR:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};

module.exports = uiNotificationsReducer;
