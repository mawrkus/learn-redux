const ACTIONS_FETCH = {
  FETCH_REQUEST: Symbol('fetch request'),
  START: Symbol('fetch start'),
  END: Symbol('fetch end'),
};

const fetchStart = ({ payload } = {}) => {
  return {
    type: ACTIONS_FETCH.START,
    payload,
  };
};

const fetchEnd = ({ payload, data, error } = {}) => {
  return {
    type: ACTIONS_FETCH.END,
    payload,
    data,
    error,
  };
};

module.exports = {
  ACTIONS_FETCH,
  fetchActionCreators: {
    fetchStart,
    fetchEnd,
  },
};
