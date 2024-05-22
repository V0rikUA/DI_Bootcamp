import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNumber,
  incremntWithPrepare,
} from "./CounterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Count: {count}</h2>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
      <div>
        Number:{"  "}
        <input />
        <button onClick={() => dispatch(incrementByNumber(7))}>
          {/* <button onClick={() => dispatch(incrementByNumber({num1:2,num2:4}))}> */}
          Increment by Number
        </button>
        <div>
          <button onClick={() => dispatch(incremntWithPrepare(2, 1))}>
            {/* <button onClick={() => dispatch(incrementByNumber({num1:2,num2:4}))}> */}
            Increment by Number with prepare
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
