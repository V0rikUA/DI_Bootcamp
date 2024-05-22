import "../blocks/header/header-score.css";
import "../blocks/header/header.css";
import "../blocks/header/header-title.css";
import { useContext } from "react";
import { AppContext } from "../App";

const Header = () => {
  const { gameParams } = useContext(AppContext);
  return (
    <>
      <header className="header">
        <h1 className="header-title">Superheroes Memory Game</h1>
        <p className="header-score">
          Score: {gameParams.score}
          <br />
          Top Score: {gameParams.topScore}
        </p>
      </header>
    </>
  );
};

export default Header;
