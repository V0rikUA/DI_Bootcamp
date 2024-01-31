const initialState = { count: 44 };

export const ICREMENT = "increment";
export const DECREMENT = "decrement";

export const counterReducer = (state = initialState, action) => {
  if (action.type === ICREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - action.payload, text: action.text };
  }
  return { ...state };
};
