// eslint-disable-next-line consistent-return
const multiMiddleware = ({ dispatch }) => next => action => {
  if (!Array.isArray(action)) {
    return next(action);
  }

  action.forEach((singleAction) => {
    if (!!singleAction && typeof singleAction.then === 'function') {
      singleAction.then(singleActionResult => dispatch(singleActionResult));
    } else {
      dispatch(singleAction);
    }
  });
};

module.exports = multiMiddleware;
