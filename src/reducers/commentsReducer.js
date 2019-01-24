const { ACTIONS_COMMENTS } = require('../actions/commentsActions');

const comments = (state = [], action) => {
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

module.exports = comments;
