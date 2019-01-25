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
    setTimeout(() => {
      const comment = ['Wreeealy interesting!', 'Boom.'][commentIndex % 2];
      dispatch(addComment({ text: comment }));
      commentIndex += 1;
    }, Math.random() * 1000);
  };
};

module.exports = {
  ACTIONS_COMMENTS,
  addComment,
  addCommentAsync,
};
