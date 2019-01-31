const { ACTIONS_USERS } = require('./usersActions');

const usersReducer = (state = { list: {}, selected: {} }, action) => {
  switch (action.type) {
    case ACTIONS_USERS.UPDATE_USERS:
      return {
        ...state,
        list: action.payload.users.reduce((byId, user) => ({ ...byId, [user.id]: user }), {}),
      };

    case ACTIONS_USERS.UPDATE_USER:
      return {
        ...state,
        selected: action.payload.user,
      };

    default:
      return state;
  }
};

module.exports = usersReducer;
