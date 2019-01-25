const { ACTIONS_MESSAGES } = require('../actions/messagesActions');

const reactions = (state = { type: '', text: '' }, action) => {
  switch (action.type) {
    case ACTIONS_MESSAGES.DISPLAY_INFO:
      return {
        ...state,
        type: 'info',
        text: action.payload.text,
      };

    case ACTIONS_MESSAGES.DISPLAY_ERROR:
      return {
        ...state,
        type: 'error',
        text: action.payload.text,
      };

    default:
      return state;
  }
};

module.exports = reactions;
