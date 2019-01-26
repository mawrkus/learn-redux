const { ACTIONS_MESSAGES } = require('./messagesActions');

const messagesReducer = (state = { info: '', error: '' }, action) => {
  switch (action.type) {
    case ACTIONS_MESSAGES.SHOW_INFO:
      return {
        ...state,
        info: action.payload.text,
      };

    case ACTIONS_MESSAGES.HIDE_INFO:
      return {
        ...state,
        info: '',
      };

    case ACTIONS_MESSAGES.SHOW_ERROR:
      return {
        ...state,
        error: action.payload.text,
      };

    case ACTIONS_MESSAGES.HIDE_ERROR:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};

module.exports = messagesReducer;
