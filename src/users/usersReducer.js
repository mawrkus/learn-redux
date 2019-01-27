const { ACTIONS_USERS } = require('./usersActions');

const usersReducer = (state = { all: {}, current: {} }, action) => {
  switch (action.type) {
    case ACTIONS_USERS.UPDATE_USERS_LIST:
      return {
        ...state,
        all: action.payload.users.reduce((byId, user) => ({ ...byId, [user.id]: user }), {}),
      };

    case ACTIONS_USERS.UPDATE_USER:
      return {
        ...state,
        current: action.payload.user,
      };

    default:
      return state;
  }
};

module.exports = usersReducer;
