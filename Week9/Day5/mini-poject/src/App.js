import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import api from "./utils/api.js";
import "./blocks/container.css";

function App() {
  const [booksArray, setBooksArray] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const sortAlgoritms = {
    byTitle: sortByTitle,
    newest: sortByDate,
    byAuthor: sortByAuthor,
  };

  function sortByTitle(title1, title2) {
    return title1.volumeInfo.title.toLowerCase() >
      title2.volumeInfo.title.toLowerCase()
      ? 1
      : -1;
  }

  function sortByDate(item1, item2) {
    return item1.volumeInfo.publishedDate.substring(0, 4) >
      item2.volumeInfo.publishedDate.substring(0, 4)
      ? -1
      : 1;
  }

  function sortByAuthor(item1, item2) {
    return item1.volumeInfo.authors[0].toLowerCase() >
      item2.volumeInfo.authors[0].toLowerCase()
      ? 1
      : -1;
  }

  const getBooksOnSubmit = (input) => {
    api
      .getBooksByName(input)
      .then((data) => {
        setBooksArray(data.items.sort(sortAlgoritms[sortOrder]));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setBooksArray([...booksArray.sort(sortAlgoritms[sortOrder])]);
  }, [sortOrder]);

  return (
    <div className="container">
      <Header />
      <SearchBar
        getBooksOnSubmit={(value) => getBooksOnSubmit(value)}
        setSortOrder={(value) => setSortOrder(value)}
      />
      <BookList sortOrder={sortOrder} booksArray={booksArray} />
    </div>
  );
}

export default App;
