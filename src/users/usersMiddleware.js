const { ACTIONS_FETCH } = require('../fetch/fetchActions');
const { usersActionCreators } = require('./usersActions');
const { uiNotificationsActionCreators } = require('../ui-notifications/uiNotificationsActions');

const { updateUsers } = usersActionCreators;
const { showNotification } = uiNotificationsActionCreators;

const getSuccessMsg = ({ meta }) => {
  return meta.resource === 'users'
    ? 'Success: users fetched!'
    : `Success: user id=${meta.id} fetched!`;
};

const getErrorMsg = ({ meta, error }) => {
  return meta.resource === 'users'
    ? `Error fetching users! ${error.msg}`
    : `Error fetching user id=${meta.id}! ${error.msg}`;
};

const usersMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    meta,
    data,
    error,
  } = action;

  next(action);

  const isUsersFetchComplete = type === ACTIONS_FETCH.END
    && (meta.resource === 'users' || meta.resource === 'user');

  if (!isUsersFetchComplete) {
    return;
  }

  if (error) {
    dispatch(showNotification({
      type: 'error',
      text: getErrorMsg({ meta, error }),
      duration: 2000,
    }));
    return;
  }

  dispatch([
    showNotification({
      type: 'info',
      text: getSuccessMsg({ meta }),
      duration: 50,
    }),
    updateUsers({ users: data }),
  ]);
};

module.exports = usersMiddleware;
