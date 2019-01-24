const ACTIONS_FETCH = {
  FETCH: Symbol('fetch'),
  START: Symbol('start'),
  END: Symbol('end'),
};

const fetch = ({ url, successAction, errorAction }) => {
  return {
    type: ACTIONS_FETCH.FETCH,
    payload: {
      url,
      successAction,
      errorAction,
    },
  };
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
  fetch,
  fetchStart,
  fetchEnd,
};
