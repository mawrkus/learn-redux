const { ACTIONS_FETCH } = require('../actions/fetchActions');

const fetch = (state = { requestsCount: 0, isFetching: false }, action) => {
  switch (action.type) {
    case ACTIONS_FETCH.START:
      return {
        ...state,
        requestsCount: state.requestsCount + 1,
        isFetching: true,
      };

    case ACTIONS_FETCH.END:
      return {
        ...state,
        requestsCount: state.requestsCount - 1,
        isFetching: state.requestsCount > 1,
      };

    default:
      return state;
  }
};

module.exports = fetch;
