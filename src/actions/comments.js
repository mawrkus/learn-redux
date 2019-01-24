const COMMENT_ACTIONS = {
  ADD_COMMENT: 'ADD_COMMENT',
};

exports.COMMENT_ACTIONS = COMMENT_ACTIONS;

const addComment =  (text) => {
  return {
    type: COMMENT_ACTIONS.ADD_COMMENT,
    payload: {
      text,
    },
  };
};

exports.addComment = addComment;

exports.addCommentAsync = (text, ms) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(addComment(text));
    }, ms);
  };
};
