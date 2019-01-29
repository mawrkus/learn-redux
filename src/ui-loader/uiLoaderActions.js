const ACTIONS_UI_LOADER = {
  SHOW: Symbol('loader:show'),
  HIDE: Symbol('loader:hide'),
};

const showLoader = () => ({
  type: ACTIONS_UI_LOADER.SHOW,
});

const hideLoader = () => ({
  type: ACTIONS_UI_LOADER.HIDE,
});

module.exports = {
  ACTIONS_UI_LOADER,
  uiLoaderActionCreators: {
    showLoader,
    hideLoader,
  },
};
