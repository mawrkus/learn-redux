const axios = require('axios');

const { ACTIONS_FETCH, fetchActionCreators } = require('./fetchActions');

const { fetchStart, fetchEnd } = fetchActionCreators;

let activeRequestsCount = 0;

const fetchMiddleware = ({ dispatch }) => next => async action => {
  const { type, payload, meta } = action;

  next(action);

  if (type !== ACTIONS_FETCH.REQUEST) {
    return;
  }

  const { method = 'GET', url } = payload;

  activeRequestsCount += 1;

  dispatch(fetchStart({
    payload: { ...payload, activeRequestsCount },
    meta,
  }));

  let data;
  let error;

  try {
    const response = await axios.request({
      method,
      url,
    });

    // TODO: normalize data with normalizr before dispatching?
    data = response.data; // eslint-disable-line prefer-destructuring
  } catch (fetchError) {
    const { config, response } = fetchError;

    const msg = response
      ? `${config.method.toUpperCase()} ${config.url} -> ${response.status} (${response.statusText})`
      : fetchError.toString();

    error = { error: fetchError, msg };
  }

  activeRequestsCount = activeRequestsCount > 0 ? activeRequestsCount - 1 : 0;

  dispatch(fetchEnd({
    payload: { ...payload, activeRequestsCount },
    meta,
    data,
    error,
  }));
};

module.exports = fetchMiddleware;
