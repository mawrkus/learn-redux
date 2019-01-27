const { ACTIONS_FETCH } = require('../fetch/fetchActions');
const { usersActionCreators } = require('./usersActions');
const { uiNotificationsActionCreators } = require('../ui-notifications/uiNotificationsActions');

const { updateUser } = usersActionCreators;
const { showNotification } = uiNotificationsActionCreators;

const userMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    meta,
    data,
    error,
  } = action;

  next(action);

  const isFetchComplete = type === ACTIONS_FETCH.END && meta.resource === 'user';
  if (!isFetchComplete) {
    return;
  }

  if (error) {
    dispatch(showNotification({
      error: `Error fetching users! ${error.msg}`,
      duration: 2000,
    }));
    return;
  }

  dispatch([
    showNotification({ info: `Success: user id=${meta.id} fetched!`, duration: 50 }),
    updateUser({ user: data }),
  ]);
};

module.exports = userMiddleware;
