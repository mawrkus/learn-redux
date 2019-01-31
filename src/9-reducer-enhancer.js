const {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const { default: reduxThunkMiddleware } = require('redux-thunk');

const { loggerMiddleware } = require('./middleware');

const { reactionsActionCreators, reactionsReducer } = require('./reactions');
const { commentsActionCreators, commentsReducer } = require('./comments');
const { historyActionCreators, historyEnhancer } = require('./history');

const reducer = historyEnhancer(combineReducers({
  reactions: reactionsReducer,
  comments: commentsReducer,
}));

loggerMiddleware.pretty = true;

const store = createStore(
  reducer,
  applyMiddleware(
    // Order IS important
    reduxThunkMiddleware,
    loggerMiddleware,
  ),
);

const { like, dislike } = bindActionCreators(reactionsActionCreators, store.dispatch);
const { addComment, addCommentAsync } = bindActionCreators(commentsActionCreators, store.dispatch);
const { undo, redo, clear } = bindActionCreators(historyActionCreators, store.dispatch);

console.log('__________________________________________________________________________________');
console.log('Demo #9: reducer enhancer');
console.log('__________________________________________________________________________________');

// store.subscribe(() => console.log('Store updated!', store.getState()));

like();
like();
addCommentAsync();
dislike();
like();
addComment({ text: 'Im-pre-ssive!!!' });

redo();
undo();
undo();
undo();
undo();
undo();
undo();
undo();
undo();
redo();
redo();
redo();
clear();
