const loggerMiddleware = ({ getState, dispatch }) => next => action => {
  const stateBefore = getState();
  console.log('DISPATCH "%s" ->', action.type, action);
  console.log(' -> BEFORE', stateBefore);

  next(action);

  const stateAfter = getState();
  console.log(' -> AFTER', stateAfter);
};

module.exports = loggerMiddleware;
