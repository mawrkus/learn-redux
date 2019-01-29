const ACTIONS_HISTORY = {
  UNDO: Symbol('history:undo'),
  REDO: Symbol('history:redo'),
  CLEAR: Symbol('history:clear'),
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
  historyActionCreators: {
    undo,
    redo,
    clear,
  },
};
