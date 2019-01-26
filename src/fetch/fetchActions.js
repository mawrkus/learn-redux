const ACTIONS_FETCH = {
  REQUEST: Symbol('fetch request'),
  START: Symbol('fetch start'),
  END: Symbol('fetch end'),
};

const fetchRequest = ({ url, meta } = {}) => {
  return {
    type: ACTIONS_FETCH.REQUEST,
    payload: {
      url,
      meta,
    },
  };
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
    fetchRequest,
    fetchStart,
    fetchEnd,
  },
};
