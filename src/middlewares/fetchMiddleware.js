const axios = require('axios');

const {
  ACTIONS_FETCH,
  fetchStart,
  fetchEnd,
} = require('../actions/fetchActions');

const fetchMiddleware = ({ getState, dispatch }) => next => async action => {
  const { type, payload } = action;

  if (type !== ACTIONS_FETCH.FETCH_REQUEST) {
    return next(action);
  }

  const {
    method = 'GET',
    url,
    successAction,
    errorAction,
  } = payload;

  dispatch(fetchStart({ method, url }));

  try {
    const { data } = await axios.request({
      method,
      url
    });

    dispatch(fetchEnd({ method, url, data }));

    if (successAction) {
      dispatch(successAction({ data }));
    }
  } catch(error) {
    dispatch(fetchEnd({ method, url, error }));

    if (errorAction) {
      dispatch(errorAction({ error }));
    }
  }
};

module.exports = fetchMiddleware;
