import React from "react";
import LanguageVoteItem from "./components/LanguageVoteItem";

function App() {
  const [languages, setLanguages] = React.useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const incrementVote = (language) => {
    setLanguages(
      languages.map((languageItem) => {
        if (languageItem.name === language)
          return { ...languageItem, votes: languageItem.votes + 1 };
        return languageItem;
      })
    );
  };

  return (
    <div className="App">
      <header></header>
      <div>
        <ul className="vote-list">
          {languages.map((language, index) => {
            return (
              <LanguageVoteItem
                name={language.name}
                votes={language.votes}
                onClick={() => incrementVote(language.name)}
                key={index}
              ></LanguageVoteItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
