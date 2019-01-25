const { createStore, combineReducers } = require('redux');

const reactionsReducer = (state = { likes: 0, dislikes: 0 }, action) => {
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

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.payload.text,
      ];

    default:
      return state;
  }
};

const reducer = combineReducers({
  reactions: reactionsReducer,
  comments: commentsReducer,
});

const store = createStore(reducer);

console.log('__________________________________________________________________________________');
console.log('Demo #2: reducers combination');
console.log('__________________________________________________________________________________');

store.subscribe(() => console.log('Store updated!', store.getState()));

store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'ADD_COMMENT', payload: { text: 'Yey! So cool :D' } });
store.dispatch({ type: 'DISLIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'ADD_COMMENT', payload: { text: 'Im-pre-ssive!!!' } });
