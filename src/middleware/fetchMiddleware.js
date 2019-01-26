const axios = require('axios');
const { omit } = require('lodash'); // lodash.omit is buggy!

const { ACTIONS_FETCH, fetchActionCreators } = require('../fetch');

const { fetchStart, fetchEnd } = fetchActionCreators;

let activeRequestsCount = 0;

// eslint-disable-next-line consistent-return
const fetchMiddleware = ({ dispatch }) => next => async action => {
  const { type, payload } = action;

  if (type !== ACTIONS_FETCH.REQUEST) {
    return next(action);
  }

  const {
    method = 'GET',
    url,
    meta = {},
  } = payload;

  // TODO: move to users middleware
  const fetchActionsPayload = omit(payload, ['meta.successAction', 'meta.errorAction']);

  activeRequestsCount += 1;

  dispatch(fetchStart({
    payload: { ...fetchActionsPayload, activeRequestsCount },
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
    payload: { ...fetchActionsPayload, activeRequestsCount },
    data,
    error,
  }));

  // TODO: move to users middleware
  if (!error && meta.successAction) {
    dispatch(meta.successAction({ data }));
  }

  if (error && meta.errorAction) {
    dispatch(meta.errorAction({ error }));
  }
};

module.exports = fetchMiddleware;
