const axios = require('axios');
const { omit } = require('lodash'); // lodash.omit is buggy!

const { ACTIONS_FETCH, fetchActionCreators } = require('../fetch');

const { fetchStart, fetchEnd } = fetchActionCreators;

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

  const {
    successAction,
    errorAction,
  } = meta;

  const fetchActionsPayload = omit(payload, ['meta.successAction', 'meta.errorAction']);

  dispatch(fetchStart({ payload: fetchActionsPayload }));

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

    error = { error, msg };
  }

  dispatch(fetchEnd({ payload: fetchActionsPayload, data, error }));

  if (!error && successAction) {
    dispatch(successAction({ data }));
  }

  if (error && errorAction) {
    dispatch(errorAction({ error }));
  }
};

module.exports = fetchMiddleware;
