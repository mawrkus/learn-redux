const {
  fetchStart,
  fetchEnd,
} = require('./fetchActions');

const ACTIONS_COMMENTS = {
  ADD: Symbol('add comment'),
};

const addComment = (text) => {
  return {
    type: ACTIONS_COMMENTS.ADD,
    payload: {
      text,
    },
  };
};

let commentIndex = 0;

const fetchComment = () => {
  return (dispatch, getState) => {
    dispatch(fetchStart({ msg: 'Fetching comment...' }));

    setTimeout(() => {
      const comment = ['Wreeealy interesting!', 'Boom.'][commentIndex++ % 2];
      dispatch(fetchEnd({ data: comment }));
      dispatch(addComment(comment));
    }, Math.random() * 1000);
  };
};

module.exports = {
  ACTIONS_COMMENTS,
  addComment,
  fetchComment,
};
