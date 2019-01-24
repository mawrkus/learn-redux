const reactions = require('./reactions');
const comments = require('./comments');

module.exports = {
  ...reactions,
  ...comments,
};
