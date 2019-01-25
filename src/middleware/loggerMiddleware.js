const dayjs = require('dayjs');

const loggerMiddleware = ({ getState }) => next => action => {
  // should be outside :/
  const prettify = loggerMiddleware.pretty ? obj => JSON.stringify(obj, null, 1) : obj => obj;

  console.group(action.type);
  console.log('[%s] ->', dayjs().format('YYYY-MM-DD - HH:mm:ss.SSS'), action);

  next(action);

  console.log('* Next state after', action.type, '->', prettify(getState()));
  console.groupEnd();
};

module.exports = loggerMiddleware;
