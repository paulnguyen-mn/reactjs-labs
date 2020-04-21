import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
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
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const initialHeroState = {
//   list: [],
//   activeHero: {},
// };
// const heroReducer = (state = initialHeroState, action) => {
//   switch (action.type) {
//     case 'ADD_HERO': {
//       const newList = [...state.list];
//       newList.push(action.payload);

//       // const newState = { ...state };
//       // newState.list.push(action.payload);
//       return {
//         ...state,
//         list: newList,
//       };
//     }
//     case 'REMOVE_HERO': {
//       const heroId = action.payload;
//       const newList = [...state.list].filter(hero => hero.id !== heroId);

//       return {
//         ...state,
//         list: newList,
//       };
//     }
//     case 'SET_ACTIVE_HERO': {
//       const newActiveHero = {
//         ...action.payload,
//       };
//       // const newActiveHero = action.payload;

//       return {
//         ...state,
//         activeHero: newActiveHero,
//       };
//     }
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   counter: counter,
//   hero: heroReducer,
// });

// const store = createStore(rootReducer);
// console.log('Redux store: ', store.getState());

// // Log on every changes on store
// store.subscribe(() => {
//   console.log('Store update: ', store.getState());
// });

// // Dispatch action: INCREMENT
// // store.dispatch({ type: 'INCREMENT' });
// // store.dispatch({ type: 'INCREMENT123' });
// // store.dispatch({ type: 'INCREMENT' });
// // store.dispatch({ type: 'DECREMENT' });

// store.dispatch({
//   type: 'ADD_HERO',
//   payload: { id: 1, name: 'Iron man', power: 999 },
// });
// store.dispatch({
//   type: 'ADD_HERO',
//   payload: { id: 2, name: 'Spider man', power: 9999 }
// });
// store.dispatch({
//   type: 'ADD_HERO',
//   payload: { id: 3, name: 'Superman', power: 99999 }
// });
// store.dispatch({
//   type: 'REMOVE_HERO',
//   payload: 2
// });
// store.dispatch({
//   type: 'SET_ACTIVE_HERO',
//   payload: { id: 3, name: 'Superman', power: 99999 }
// });


// ------
// const a = {
//   hobbies: [1, 2, 3]
// }

// const b = {
//   ...a,
//   hobbies: [...a.hobbies]
// }

// // a.hobbies ??? b.hobbies tham chiếu
// a.hobbies.push(4)
// // b.hobbies = ??? [1, 2, 3, 4]