const COMMENT_ACTIONS = {
  ADD_COMMENT: 'ADD_COMMENT',
};

exports.COMMENT_ACTIONS = COMMENT_ACTIONS;

exports.addComment = (text) => {
  return {
    type: COMMENT_ACTIONS.ADD_COMMENT,
    text,
  };
};

exports.addCommentAsync = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addComment(text));
    }, 1000);
  };
}
