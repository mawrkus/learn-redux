const ACTIONS_REACTIONS = {
  LIKE: Symbol('like'),
  DISLIKE: Symbol('dislike'),
};

const like = () => {
  return {
    type: ACTIONS_REACTIONS.LIKE,
  };
};

const dislike = () => {
  return {
    type: ACTIONS_REACTIONS.DISLIKE,
  };
};

module.exports = {
  ACTIONS_REACTIONS,
  reactionsActionCreators: {
    like,
    dislike,
  },
};
