const {
  createStore,
} = require('redux');

const reducer = require('./reducers');

/* reactions actions */

const REACTION_ACTIONS = {
  LIKES: 'LIKES',
  DISLIKES: 'DISLIKES',
};

function like() {
  return {
    type: REACTION_ACTIONS.LIKES,
  };
};

function dislike() {
  return {
    type: REACTION_ACTIONS.DISLIKES,
  };
};

/* comments actions */

const COMMENT_ACTIONS = {
  ADD_COMMENT: 'ADD_COMMENT',
};

function addComment(text) {
  return {
    type: COMMENT_ACTIONS.ADD_COMMENT,
    payload: {
      text,
    },
  };
};

const store = createStore(reducer);

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch(like());
store.dispatch(like());
store.dispatch(dislike());
store.dispatch(like());
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(addComment('Im-pre-ssive!!!'));
