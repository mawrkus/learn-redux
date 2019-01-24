# Redux

> Redux is a predictable state container for JavaScript apps.

https://redux.js.org/

## Motivation

Centralizing application state and logic in order to:

- have more predictable apps (single source of truth, unidirectional data flow)
- have apps that scale really nicely
- be able to trace every state mutations (-> allows undo/redo, aka "time travel debugging")
- enable state to be easily persisted and restored

## Installation

From scratch:

```bash
yarn add redux
```

Started kit (https://redux-starter-kit.js.org):

```bash
yarn add redux-starter-kit
```

## Concepts

The whole state of your app is stored in an object tree inside **a single store**.
The only way to change the state tree is **to emit an action**, an object describing what happened.
To specify how the actions transform the state tree, you write **pure reducers**.

### Store

It's an object that holds the whole state of your app.

```js
const { createStore } require('redux');

// TODO: define a reducer

const store = createStore(reducer);
```

### Actions

Disptaching actions is **the only way** to mutate the internal state.
Each action is an object with a type that describes what hapened.

```js
const { createStore } require('redux');

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

A reducer is a pure function that receives the actual state and the action as arguments.
It decides how every action transforms the actual state into the next state.
It should never mutate the state received, but should return a brand new object if the state changes.

```js
const { createStore } require('redux');

/*
  * @param {*} state Can be object, array or primitive
  * @param {Object} action
  * @param {String} action.type
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

## Best practices

### Scaling

Split the root reducer into smaller reducers that operates independently on the different parts of the state tree.

```js
```

## Advanced topics

### Async

### Middlewares

### Sagas

### React

## Resources

- https://redux.js.org
- https://redux-starter-kit.js.org/
- Practical advanced Redux (middlewares): https://www.youtube.com/watch?v=Gjiu7Lgdg3s
