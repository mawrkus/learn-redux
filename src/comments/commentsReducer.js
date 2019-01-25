const { ACTIONS_COMMENTS } = require('./commentsActions');

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_COMMENTS.ADD:
      return [
        ...state,
        action.payload.text,
      ];

    default:
      return state;
  }
};

module.exports = commentsReducer;
