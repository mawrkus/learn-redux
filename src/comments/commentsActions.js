const ACTIONS_COMMENTS = {
  ADD: Symbol('add comment'),
};

const addComment = ({ text }) => {
  return {
    type: ACTIONS_COMMENTS.ADD,
    payload: {
      text,
    },
  };
};

let commentIndex = 0;

const addCommentAsync = () => {
  return (dispatch) => {
    const ms = Math.ceil(Math.random() * 1000);

    setTimeout(() => {
      const comment = ['Wreeealy interesting!', 'Boom.'][commentIndex % 2];
      dispatch(addComment({ text: `${comment} (async after ${ms}ms)` }));
      commentIndex += 1;
    }, ms);
  };
};

module.exports = {
  ACTIONS_COMMENTS,
  commentsActionCreators: {
    addComment,
    addCommentAsync,
  },
};
