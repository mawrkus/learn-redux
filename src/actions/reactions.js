const REACTION_ACTIONS = {
  LIKES: 'LIKES',
  DISLIKES: 'DISLIKES',
};

exports.REACTION_ACTIONS = REACTION_ACTIONS;

exports.like = () => {
  return {
    type: REACTION_ACTIONS.LIKES,
  };
};

exports.dislike = () => {
  return {
    type: REACTION_ACTIONS.DISLIKES,
  };
};
