import Book from "./Book";
import cover from "../assets/content.jpg";
import "../blocks/books-list/book-description.css";
import "../blocks/books-list/book-details.css";
import "../blocks/books-list/book-title.css";
const BookCard = ({ book }) => {
  return (
    <li className="book-list__item">
      <Book image={book.image} />
      <p className="book-title book-description">{book.title}</p>
      <p className="book-details book-description">Author: {book.author}</p>
      <p className="book-details book-description">
        Published: {book.published}
      </p>
    </li>
  );
};

export default BookCard;
