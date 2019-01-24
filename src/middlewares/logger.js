const  logger = ({ getState, dispatch }) => next => action => {
  console.log('Action "%s" ->', action.type, action);
  next(action);
};

module.exports = logger;
