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
    },
    meta,
  };
};

const fetchStart = ({ payload, meta } = {}) => {
  return {
    type: ACTIONS_FETCH.START,
    payload,
    meta,
  };
};

const fetchEnd = ({
  payload,
  meta,
  data,
  error,
} = {}) => {
  return {
    type: ACTIONS_FETCH.END,
    payload,
    meta,
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
