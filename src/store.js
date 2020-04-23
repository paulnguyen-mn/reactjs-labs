import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const stateFromStorage = JSON.parse(localStorage.getItem('redux_store')) || {};
const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, stateFromStorage, middleware);

// store.subscribe(() => {
//   console.log('Store update: ', store.getState());
//   const newState = store.getState();
//   localStorage.setItem('redux_store', JSON.stringify(newState))
// });

export default store;