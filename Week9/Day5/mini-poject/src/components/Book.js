import "../blocks/books-list/book-image__small.css";
import "../blocks/books-list/book-image-container.css";
const Book = ({ image }) => {
  return (
    <>
      <div className="book-image-container">
        <img className="book-image__small" src={image} alt="" />
      </div>
    </>
  );
};

export default Book;
