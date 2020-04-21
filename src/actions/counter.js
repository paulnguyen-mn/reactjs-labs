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