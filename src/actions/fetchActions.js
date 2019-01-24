const ACTIONS_FETCH = {
  FETCH_REQUEST: Symbol('fetch request'),
  START: Symbol('fetch start'),
  END: Symbol('fetch end'),
};
const fetchStart = ({ method, url }) => {
  return {
    type: ACTIONS_FETCH.START,
    payload: {
      method,
      url,
    },
  };
}

const fetchEnd = ({ method, url, data, error }) => {
  return {
    type: ACTIONS_FETCH.END,
    payload: {
      method,
      url,
      data,
      error,
    },
  };
}

module.exports = {
  ACTIONS_FETCH,
  fetchStart,
  fetchEnd,
};
