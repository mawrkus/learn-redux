const { ACTIONS_USERS } = require('../actions/usersActions');

const reactions = (state = { list: [], current: {} }, action) => {
  switch (action.type) {
    case ACTIONS_USERS.DISPLAY_LIST:
      return {
        ...state,
        list: action.payload.users,
      };

    case ACTIONS_USERS.DISPLAY_SINGLE:
      return {
        ...state,
        current: action.payload.user,
      };

    default:
      return state;
  }
};

module.exports = reactions;
