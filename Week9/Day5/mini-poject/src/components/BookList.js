import testData from "../utils/testData";
import BookCard from "./BookCard";
import "../blocks/books-list/book-list.css";
import "../blocks/books-list/book-list__item.css";

const BookList = ({ sortOrder, booksArray }) => {
  return (
    <>
      <ul className="book-list">
        {booksArray.map((item, index) => {
          return (
            <BookCard
              book={{
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors,
                published: item.volumeInfo.publishedDate.substring(0, 4),
                image: item.volumeInfo.imageLinks.thumbnail,
              }}
              key={index}
            />
          );
        })}
      </ul>
    </>
  );
};

export default BookList;
