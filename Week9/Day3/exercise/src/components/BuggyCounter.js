import { useState } from "react";
const BuggyCounter = () => {
  const [counter, setCounter] = useState(0);

  if (counter > 5) throw new Error("It's an error!!!");

  return (
    <>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>
    </>
  );
};

export default BuggyCounter;
