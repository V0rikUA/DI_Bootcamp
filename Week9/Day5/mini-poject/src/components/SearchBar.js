import "../blocks/searchbar/search-input.css";
import "../blocks/searchbar/search-options.css";
import "../blocks/searchbar/searchbar-container.css";
import "../blocks/searchbar/search-button.css";
import { useState } from "react";

const SearchBar = ({ setSortOrder, getBooksOnSubmit }) => {
  const [input, setInput] = useState();
  const changeSortOrderOnChange = (e) => {
    console.log(e.target.value);
    setSortOrder(e.target.value);
  };

  const setInputOnSubmit = (e) => {
    e.preventDefault();
    if (input) getBooksOnSubmit(input.replace(/\s/g, "").toLowerCase());
  };

  return (
    <>
      <form
        className="searchbar-container"
        onSubmit={(e) => setInputOnSubmit(e)}
      >
        <input
          className="search-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          <button type="submit" className="search-button">
            Search
          </button>
          <select
            className="serch-options"
            name="selectSortOrder"
            onChange={(e) => changeSortOrderOnChange(e)}
            defaultValue={"newest"}
          >
            <option value={"newest"}>Newest</option>
            <option value={"byTitle"}>By name</option>
            <option value={"byAuthor"}>By Author</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
