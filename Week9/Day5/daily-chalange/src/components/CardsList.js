import Card from "./Card";
import "../blocks/cards/card-list.css";
import { useContext } from "react";
import { AppContext } from "../App";

const CardList = () => {
  const { cards, setGameParams, gameParams } = useContext(AppContext);

  const handleOnCardsClick = (item) => {
    if (item.clicked) {
      setGameParams({
        topScore:
          gameParams.score > gameParams.topScore
            ? gameParams.score
            : gameParams.topScore,
        score: 0,
      });
    } else {
      item.clicked = true;
      setGameParams({
        ...gameParams,
        score: gameParams.score + 1,
      });
    }
  };
  return (
    <>
      <ul className="cards-list">
        {cards.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            occupation={item.occupation}
            onClick={() => handleOnCardsClick(item)}
          />
        ))}
      </ul>
    </>
  );
};

export default CardList;
