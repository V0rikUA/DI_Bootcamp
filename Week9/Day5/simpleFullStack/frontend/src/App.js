import { useState } from "react";
import "./App.css";
import ButtonFetch from "./components/ButtonFetch";

function App() {
  const [fetched, setFetched] = useState();
  const [greeting, setGreeting] = useState();
  const [input, setInput] = useState();

  const fetchServer = (string = "") => {
    fetch("http://localhost:5000/hello/" + string)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const getGreeting = () => {
    fetch(`http://localhost:5000/hello/${input}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGreeting(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <ButtonFetch fetchOnClick={() => fetchServer()} />
        <ButtonFetch fetchOnClick={() => fetchServer(":Dima")} />
        <input onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => getGreeting()}> greeting</button>
      </header>
    </div>
  );
}

export default App;
