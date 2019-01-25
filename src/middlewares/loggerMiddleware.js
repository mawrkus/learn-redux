const loggerMiddleware = ({ getState, dispatch }) => next => action => {
  console.log('* Dispatching "%s" ->', action.type, action);

  next(action);

  console.log('-> Next state ->', getState());
};

module.exports = loggerMiddleware;
