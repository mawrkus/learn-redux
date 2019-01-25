const ACTIONS_MESSAGES = {
  DISPLAY_INFO: Symbol('display info message'),
  DISPLAY_ERROR: Symbol('display error message'),
};

const displayInfoMsg = ({ text }) => {
  return {
    type: ACTIONS_MESSAGES.DISPLAY_INFO,
    payload: {
      text,
    },
  };
};

const displayErrorMsg = ({ text }) => {
  return {
    type: ACTIONS_MESSAGES.DISPLAY_ERROR,
    payload: {
      text,
    },
  };
};

module.exports = {
  ACTIONS_MESSAGES,
  messagesActionCreators: {
    displayInfoMsg,
    displayErrorMsg,
  },
};
