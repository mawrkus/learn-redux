const {
  createStore,
  applyMiddleware,
  compose,
} = require('redux');

const reducer = (state = { likes: 0, dislikes: 0 }, action) => {
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

const store = createStore(reducer);

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'DISLIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'FLAG_AS_OBSCENE' });
