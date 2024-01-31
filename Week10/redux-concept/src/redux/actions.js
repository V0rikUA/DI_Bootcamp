import { ICREMENT, DECREMENT } from "./reducers";

export const increment = () => {
  return { type: ICREMENT };
};

export const decrement = (value, text) => {
  return {
    type: DECREMENT,
    payload: value,
    text,
  };
};
