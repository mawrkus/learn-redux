# Redux

<img style="float:right; margin:0 0 0 12px;height:64px;" src="./img/redux-logo.png" alt="Redux logo">

Redux is a predictable state container for JavaScript apps.

https://redux.js.org

## Installation

From scratch (https://www.npmjs.com/package/redux):

```bash
yarn add redux
```

Started kit (https://redux-starter-kit.js.org):

```bash
yarn add redux-starter-kit
```

## Motivation

- Managing an app state that changes a lot is hard (especially in frontend).
- How to keep control over the "when?", "why?", and "how?" of the app state?
- How to make state mutations predictable?

## Concepts

- The whole state of your app is stored in an object tree inside **a single store**.
- The only way to change the state tree is **to emit an action**, an object describing what happened.
- To specify how the actions transform the state tree, you write **pure reducers**.

### Data flow

![Redux data flow](./img/redux-data-flow.png);

### Benefits

- more predictable apps (single source of truth, unidirectional data flow)
- traceability of every state mutations -> undo/redo is trivial (aka "time travel debugging")
- state can be easily persisted and restored (from server or any storage)
- easier to debug/inspect a single state tree
- apps scale really nicely

### Store

It's an object that holds the whole state of your app.

```js
const { createStore } = require('redux');

// TODO: define a reducer

const store = createStore(reducer);
```

### Actions

- Disptaching actions is **the only way** to mutate the internal state.
- Each action is an **object with a type** that describes what hapened.

```js
const { createStore } = require('redux');

// TODO: define a reducer

// API -> { subscribe, dispatch, getState }
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'DISLIKE' });
store.dispatch({ type: 'LIKE' });
```

### Reducers

- A reducer is a **pure function** that receives the actual state and the action as arguments.
- It decides how every action transforms the actual state into the next state.
- It should **never mutate the state** received, but should always return a brand new object if the state changes.

A pure function is a function that returns the exact same output for given inputs, it is also free of side-effects.

```js
const { createStore } = require('redux');

/*
  * @param {*} state Can be object, array or primitive
  * @param {Object} action
  * @param {String} action.type
  *
  * Remember Array.prototype.reduce((acc, value) => ...) ? ;)
*/
function reducer(state = { likes: 0, dislikes: 0 }, action) {
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
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'LIKE' });
store.dispatch({ type: 'DISLIKE' });
store.dispatch({ type: 'LIKE' });
```

#### Multiple reducers

As the app grows, it's good practice to split the root reducer into smaller reducers that operates independently on the different parts of the state tree and combine them.

```js
const { createStore } = require('redux');

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

const reducer = (state = { reactions: { likes: 0, dislikes: 0 }, comments: [] }, action) => {
  return {
    reactions: reactionsReducer(state.reactions, action),
    comments: commentsReducer(state.comments, action),
  };
};

const store = createStore(reducer);

// ...
```

Redux provides the built-in function `combineReducers()`:

```js
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
        action.payload.text,
      ];

    default:
      return state;
  }
};

const reducer = combineReducers({ reactions, comments });

const store = createStore(reducer);

// ...
```

### Action creators

- An **action creator** is a (factory) function that creates an action.
- Calling an action creator only produces an action, it does not dispatch it.
- If an action creator needs to read the current state, to perform an API call, or to cause a side effect, it should return an **async action** instead of an action (see below).

#### Sync actions

actions/comments.js:

```js
// ...

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

// ...

store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(addComment('Im-pre-ssive!!!'));
```

### Async actions

- The base `dispatch()` function always sends **synchronously** an action to the store's reducer.
- It expects actions to be **plain objects** ready to be consumed by the reducer.

To dispatch asynchronous actions (like fetching data from an API), we can use the [Redux Thunk middleware](https://github.com/reduxjs/redux-thunk):

```bash
yarn add redux-thunk
```

```js
const {
  createStore,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

// ...

const store = createStore(
  reducer,
  applyMiddleware(reduxThunkMiddleware),
);

// ...
```

- By using this middleware, an action creator can return a function instead of an action object.
- The action creator becomes a **thunk** (a function that wraps an expression to delay its evaluation) and can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

```js
const {
  createStore,
  applyMiddleware,
} = require('redux');

// redux-thunk >= 2.x in CommonJS environment
const reduxThunkMiddleware = require('redux-thunk').default;

// ...

const {
  addComment,
} = require('./actions');

// Function executed by the Redux Thunk middleware
const addCommentAsync = (text) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // We can still dispatch actions from here based on the current state
      dispatch(addComment(text));
    }, 1000);
  };
};

const store = createStore(
  reducer,
  applyMiddleware(reduxThunkMiddleware),
);

// ...

store.dispatch(addCommentAsync('It gets really interesting!'));
store.dispatch(addComment('Yey! So cool :D'));
store.dispatch(addCommentAsync('Boom.'));
store.dispatch(addComment('Im-pre-ssive!!!'));
```

There is a rich ecosystem of middlewares to deal with async actions: `redux-promise`, `redux-promise-middleware`, `redux-observable`, `redux-saga` (to build more complex asynchronous actions) or `redux-pack`.

You can even write a your own custom middlewares...

### Middlewares

- They provide a 3rd extension point between dispatching an action and the moment it reaches the reducer.
- They are higher-order functions that compose a dispatch function to return a new dispatch function.
- They are composable.

Some usages:

- logging actions
- centralizing analytics
- centralizing API requests
- throttling actions

```js
// ...

const store = createStore(
  reducer,
  applyMiddleware(
    // Order IS important!
    reduxThunkMiddleware,
    middleware1,
    middleware2,
    middleware3,
  ),
);

// ...
```

### Sagas

TODO

### React integration

TODO

## Resources

- Redux: https://redux.js.org
- Redux Starter Kit: https://redux-starter-kit.js.org/
- Redux Thunk Middleware: https://github.com/reduxjs/redux-thunk
- Practical advanced Redux (middlewares): https://www.youtube.com/watch?v=Gjiu7Lgdg3s
- Getting Started with Redux (Dan Abramov himself): https://egghead.io/series/getting-started-with-redux
