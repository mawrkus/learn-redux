const { ACTIONS_FETCH } = require('../actions/fetchActions');

const fetch = (state = { isFetching: false, error: null }, action) => {
  switch (action.type) {
    case ACTIONS_FETCH.START:
      return {
        ...state,
        isFetching: true,
      };

    case ACTIONS_FETCH.END:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

module.exports = fetch;
