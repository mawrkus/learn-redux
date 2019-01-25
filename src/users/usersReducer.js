const { ACTIONS_USERS } = require('./usersActions');

const usersReducer = (state = { list: [], current: {} }, action) => {
  switch (action.type) {
    case ACTIONS_USERS.UPDATE_USERS_LIST:
      return {
        ...state,
        list: action.payload.users,
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
