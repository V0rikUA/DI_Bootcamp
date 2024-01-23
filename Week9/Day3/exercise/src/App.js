import logo from "./logo.svg";
import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./errors/ErrorBoundary";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <BuggyCounter />
        <Color />
      </header>
    </div>
  );
}

export default App;
