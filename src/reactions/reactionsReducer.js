const { ACTIONS_REACTIONS } = require('./reactionsActions');

const reactionsReducer = (state = { likes: 0, dislikes: 0 }, action) => {
  switch (action.type) {
    case ACTIONS_REACTIONS.LIKE:
      return {
        ...state,
        likes: state.likes + 1,
      };

    case ACTIONS_REACTIONS.DISLIKE:
      return {
        ...state,
        dislikes: state.dislikes + 1,
      };

    default:
      return state;
  }
};

module.exports = reactionsReducer;
