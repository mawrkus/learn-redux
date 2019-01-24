const { COMMENT_ACTIONS } = require('../actions/comments');

const comments = (state = [], action) => {
  switch (action.type) {
    case COMMENT_ACTIONS.ADD_COMMENT:
      return [
        ...state,
        action.payload.text,
      ];

    default:
      return state;
  }
};

module.exports = comments;
