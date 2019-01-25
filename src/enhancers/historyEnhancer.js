const { ACTIONS_HISTORY } = require('../actions/historyActions');

/* Higher order reducer or reducer enhancer to add undo/redo/clear functionality to redux state containers */

// Our enhancer is also a reducer!
const history = (reducer) => {
  const initialState = {
    past: [],
    present: reducer(undefined, {}), // only to populate the initial state
    future: [],
  };

  return (state = initialState, action) => {
    const { past, present, future } = state;

    switch (action.type) {
      case ACTIONS_HISTORY.CLEAR:
        return {
          past: [],
          present,
          future: [],
        };

      case ACTIONS_HISTORY.UNDO:
        const previous = past[past.length - 1];
        if (!previous) {
          return state;
        }
        return {
          past: past.slice(0, past.length - 1),
          present: previous,
          future: [present, ...future],
        };

      case ACTIONS_HISTORY.REDO:
        const next = future[0];
        if (!next) {
          return state;
        }
        return {
          past: [...past, present],
          present: next,
          future: future.slice(1),
        };

      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
};

module.exports = history;
