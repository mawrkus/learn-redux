const ACTIONS_COMMENTS = {
  ADD: Symbol('add'),
};

const addComment = (text) => {
  return {
    type: ACTIONS_COMMENTS.ADD,
    payload: {
      text,
    },
  };
};

const addCommentAsync = (text, ms) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(addComment(text));
    }, ms);
  };
};

module.exports = {
  ACTIONS_COMMENTS,
  addComment,
  addCommentAsync,
};
