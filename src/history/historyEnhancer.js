const { ACTIONS_HISTORY } = require('./historyActions');

// Our enhancer is also a reducer!
const historyEnhancer = (reducer) => {
  const initialState = {
    past: [],
    // we call the reducer only to populate the initial state
    present: reducer(undefined, {}),
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
        if (newPresent === present) {
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

module.exports = historyEnhancer;
