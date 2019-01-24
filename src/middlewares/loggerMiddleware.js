const loggerMiddleware = ({ getState, dispatch }) => next => action => {
  console.log('DISPATCH "%s" ->', action.type, action);
  next(action);
};

module.exports = loggerMiddleware;
