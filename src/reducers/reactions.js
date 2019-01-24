const { REACTION_ACTIONS } = require('../actions/reactions');

const reactions = (state = { likes: 0, dislikes: 0 }, action) => {
  switch (action.type) {
    case REACTION_ACTIONS.LIKES:
      return {
        ...state,
        likes: state.likes + 1,
      };

    case REACTION_ACTIONS.DISLIKES:
      return {
        ...state,
        dislikes: state.dislikes + 1,
      };

    default:
      return state;
  }
};

module.exports = reactions;
