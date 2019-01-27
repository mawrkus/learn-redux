const { ACTIONS_FETCH } = require('../fetch/fetchActions');
const { usersActionCreators } = require('./usersActions');
const { uiNotificationsActionCreators } = require('../ui-notifications/uiNotificationsActions');

const { updateUsers } = usersActionCreators;
const { showNotification } = uiNotificationsActionCreators;

const usersMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    meta,
    data,
    error,
  } = action;

  next(action);

  if (type !== ACTIONS_FETCH.END || meta.resource !== 'users') {
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
    showNotification({ info: 'Success: users fetched!', duration: 50 }),
    updateUsers({ users: data }),
  ]);
};

module.exports = usersMiddleware;
