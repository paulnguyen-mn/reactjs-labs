import { INCREMENT, DECREMENT } from "./actionType"

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  }
}

export const increaseCounterAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increaseCounter());
    }, 1000);
  };
}