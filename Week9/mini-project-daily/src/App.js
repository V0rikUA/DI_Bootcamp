import "normalize.css";
import "./blocks/container/container.css";
import "./blocks/main/main.css";
import "./blocks/container/vcontainer__result-text.css";
import { useState } from "react";
import InputsComponent from "./components/InputsComponent";
import ActionButtonComponent from "./components/ActionButtonComponent";

function App() {
  const [inputFirst, setInputFirst] = useState(0);
  const [inputSecond, setInputSecond] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="container">
      <main className="main">
        <InputsComponent
          setFirstInput={(value) => setInputFirst(value)}
          setSecondInput={(value) => setInputSecond(value)}
        ></InputsComponent>
        <ActionButtonComponent
          firstInput={inputFirst}
          secondInput={inputSecond}
          onClick={(value) => setResult(value)}
        ></ActionButtonComponent>
        <p className="container__result-text">{result}</p>
      </main>
    </div>
  );
}

export default App;
