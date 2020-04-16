import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root-app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// TODO: Remove after learning
// TESTING SIMPLE REDUX

// Simple reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);
console.log('Redux store: ', store.getState());

// Log on every changes on store
store.subscribe(() => {
  console.log('Store update: ', store.getState());
});

// Dispatch action: INCREMENT
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT123' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });