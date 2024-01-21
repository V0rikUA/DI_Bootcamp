import "normalize.css";
import "./blocks/container/container.css";
import "./blocks/container/__main/container__main.css";
import quotes from "./assets/QuotesDatabase";
import QuotesComponent from "./components/QuotesComponent";
import { useEffect, useState } from "react";
import rundomNumber from "./utils/randomNumberGenerator";

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState("");

  const getRandomQuote = () => {
    let randomIdex = rundomNumber(quotes.length);
    if (!quote) return quotes[randomIdex];
    while (quotes[randomIdex].quote === quote.quote) {
      randomIdex = rundomNumber(quotes.length);
    }
    return quotes[randomIdex];
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[rundomNumber(letters.length)];
    }
    return color;
  };

  const getRandomColorQuote = () => {
    setColor(getRandomColor());
    setQuote(getRandomQuote());
  };

  useEffect(() => {
    getRandomColorQuote();
  }, []);

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <main className="container__main">
        <QuotesComponent
          fontColor={color}
          quote={quote.quote}
          author={quote.author}
          onClick={() => {
            getRandomColorQuote();
          }}
        ></QuotesComponent>
      </main>
    </div>
  );
}

export default App;
