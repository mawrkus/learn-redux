const { ACTIONS_FETCH } = require('../fetch/fetchActions');
const { uiLoaderActionCreators } = require('./uiLoaderActions');

const { showLoader, hideLoader } = uiLoaderActionCreators;

const uiLoaderMiddleware = ({ dispatch }) => next => action => {
  next(action);

  const { type, payload } = action;

  if (type === ACTIONS_FETCH.START) {
    if (payload.activeRequestsCount <= 1) {
      dispatch(showLoader());
    }
  } else if (type === ACTIONS_FETCH.END) {
    if (payload.activeRequestsCount <= 0) {
      dispatch(hideLoader());
    }
  }
};

module.exports = uiLoaderMiddleware;
