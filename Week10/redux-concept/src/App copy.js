import logo from "./logo.svg";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const divRef = useRef();
  const nameInputRef = useRef();

  const nameRef = useRef("Dan");

  const handleClick = () => {
    nameRef.current = "Anne";
    divRef.current.style.backgroundColor = "black";
  };

  return (
    <div className="App">
      <header className="App-header" ref={divRef}>
        <input ref={nameInputRef} />
        <button onClick={handleClick}>Click</button>
        <h2>{nameRef.current}</h2>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
