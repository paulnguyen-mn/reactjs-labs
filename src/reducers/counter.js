import { INCREMENT, DECREMENT } from "../actions/actionType";

const counterFromStorage = localStorage.getItem('counter') || 0;
// '17' --> +'17' = 17
// null || 0 --> 0 --> +0 = 0
const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: {
      const newCounter = state + 1;
      // localStorage.setItem('counter', newCounter);

      return newCounter;
    }
    case DECREMENT: {
      const newCounter = state - 1;
      // localStorage.setItem('counter', newCounter);

      return newCounter;
    }
    default:
      return state;
  }
};

export default counter;