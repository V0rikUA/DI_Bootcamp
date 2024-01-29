import { createContext, useEffect, useState } from "react";
import "./blocks/container.css";
import CardList from "./components/CardsList";
import Header from "./components/Header";
import data from "./data/superheroes.json";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const AppContext = createContext();

function App() {
  const [cards, setCards] = useState([...data.superheroes]);
  const [gameParams, setGameParams] = useState({
    score: 0,
    topScore: 0,
  });

  useEffect(() => {
    if (gameParams.score === 0) {
      setCards(
        cards.map((card) => {
          return { ...card, clicked: false };
        })
      );
    } else {
      setCards(shuffle(cards));
    }
  }, [gameParams.score]);

  return (
    <div className="container">
      <AppContext.Provider
        value={{ cards, setCards, gameParams, setGameParams }}
      >
        <Header />
        <main className="main">
          <CardList />
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
