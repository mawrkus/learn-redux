const { promisify } = require('util');

const ACTIONS_COMMENTS = {
  ADD: Symbol('comments:add'),
};

const addComment = ({ text }) => {
  return {
    type: ACTIONS_COMMENTS.ADD,
    payload: {
      text,
    },
  };
};

const wait = promisify(setTimeout);
let commentIndex = 0;

const addCommentAsync = () => {
  return async (dispatch) => {
    const ms = Math.ceil(Math.random() * 1000);
    await wait(ms);

    const comment = ['Wreeealy interesting!', 'Boom.'][commentIndex % 2];
    dispatch(addComment({ text: `${comment} (async after ${ms}ms)` }));

    commentIndex += 1;
  };
};

module.exports = {
  ACTIONS_COMMENTS,
  commentsActionCreators: {
    addComment,
    addCommentAsync,
  },
};
