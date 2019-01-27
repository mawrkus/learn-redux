const { ACTIONS_FETCH } = require('../fetch/fetchActions');
const { usersActionCreators } = require('./usersActions');
const { uiNotificationsActionCreators } = require('../ui-notifications/uiNotificationsActions');

const { updateUser } = usersActionCreators;
const { showMessage } = uiNotificationsActionCreators;

const userMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    meta,
    data,
    error,
  } = action;

  next(action);

  if (type !== ACTIONS_FETCH.END || meta.resource !== 'user') {
    return;
  }

  if (error) {
    dispatch(showMessage({
      error: `Error fetching users! ${error.msg}`,
      duration: 2000,
    }));
    return;
  }

  dispatch([
    showMessage({ info: `Success: user id=${meta.id} fetched!`, duration: 50 }),
    updateUser({ user: data }),
  ]);
};

module.exports = userMiddleware;
