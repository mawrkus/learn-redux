const {
  combineReducers,
} = require('redux');

const reactions = require('./reactionsReducer');
const comments = require('./commentsReducer');
const fetch = require('./fetchReducer');

const reducer = combineReducers({ reactions, comments, fetch });

module.exports = reducer;
