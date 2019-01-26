const { ACTIONS_UI_LOADER } = require('./uiLoaderActions');

const uiLoaderReducer = (state = { display: false }, action) => {
  switch (action.type) {
    case ACTIONS_UI_LOADER.SHOW:
      return {
        ...state,
        display: true,
      };

    case ACTIONS_UI_LOADER.HIDE:
      return {
        ...state,
        display: false,
      };

    default:
      return state;
  }
};

module.exports = uiLoaderReducer;
