const ACTIONS_HISTORY = {
  UNDO: Symbol('undo'),
  REDO: Symbol('redo'),
  CLEAR: Symbol('clear'),
};

const undo = () => ({
  type: ACTIONS_HISTORY.UNDO,
});

const redo = () => ({
  type: ACTIONS_HISTORY.REDO,
});

const clear = () => ({
  type: ACTIONS_HISTORY.CLEAR,
});

module.exports = {
  ACTIONS_HISTORY,
  undo,
  redo,
  clear,
};
