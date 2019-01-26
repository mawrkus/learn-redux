const ACTIONS_MESSAGES = {
  SHOW_INFO: Symbol('show info message'),
  HIDE_INFO: Symbol('hide info message'),
  SHOW_ERROR: Symbol('show error message'),
  HIDE_ERROR: Symbol('hide error message'),
};

const hideMessage = ({ type }) => {
  const actionType = type === 'error' ? ACTIONS_MESSAGES.HIDE_ERROR : ACTIONS_MESSAGES.HIDE_INFO;
  return {
    type: actionType,
  };
};

const timeoutIds = {
  [ACTIONS_MESSAGES.SHOW_INFO]: null,
  [ACTIONS_MESSAGES.SHOW_ERROR]: null,
};

const showMessage = ({ info, error, duration }) => {
  const actionType = error ? ACTIONS_MESSAGES.SHOW_ERROR : ACTIONS_MESSAGES.SHOW_INFO;

  if (timeoutIds[actionType]) {
    clearTimeout(timeoutIds[actionType]);
    timeoutIds[actionType] = null;
  }

  const actions = [{
    type: actionType,
    payload: {
      text: error || info,
    },
  }];

  if (duration > 0) {
    const hideP = new Promise((resolve) => {
      timeoutIds[actionType] = setTimeout(() => resolve(hideMessage({
        type: error ? 'error' : 'info',
      })),
      duration);
    });

    actions.push(hideP);
  }

  return actions;
};

module.exports = {
  ACTIONS_MESSAGES,
  messagesActionCreators: {
    hideMessage,
    showMessage,
  },
};
