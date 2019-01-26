const uiLoaderActions = require('./uiLoaderActions');
const uiLoaderReducer = require('./uiLoaderReducer');
const uiLoaderMiddleware = require('./uiLoaderMiddleware');

module.exports = {
  ...uiLoaderActions,
  uiLoaderReducer,
  uiLoaderMiddleware,
};
