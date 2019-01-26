const ACTIONS_UI_LOADER = {
  SHOW: Symbol('show loader'),
  HIDE: Symbol('hide loader'),
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
