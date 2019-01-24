const  log = ({ getState, dispatch }) => next => action => {
  console.log('"%s" action', action, getState());
};

module.exports = log;
