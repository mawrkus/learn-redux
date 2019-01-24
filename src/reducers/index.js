const {
  combineReducers,
} = require('redux');

const reactions = require('./reactions');
const comments = require('./comments');

const reducer = combineReducers({ reactions, comments });

module.exports = reducer;
