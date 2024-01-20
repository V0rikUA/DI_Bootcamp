import "./App.css";
import Color from "./components/Color";
import Events from "./components/Events";
import Phone from "./components/Phone";
import CarInfo from "./components/car";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarInfo info={carinfo}></CarInfo>
        <Events></Events>
        <Phone></Phone>
        <Color></Color>
      </header>
    </div>
  );
}

export default App;
