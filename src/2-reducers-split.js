const {
  createStore,
  combineReducers,
} = require('redux');

const reactions = (state = { likes: 0, dislikes: 0 }, action) => {
  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        likes: state.likes + 1,
      };

    case 'DISLIKE':
      return {
        ...state,
        dislikes: state.dislikes + 1,
      };

    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.text,
      ];

    default:
      return state;
  }
};

const reducer = combineReducers({ reactions, comments });

const store = createStore(reducer);

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'DISLIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'ADD_COMMENT', text: 'Yey! So cool :D' });
store.dispatch({ type: 'ADD_COMMENT', text: 'Im-pre-ssive!!!' });
