import "../blocks/header/header.css";
import "../blocks/header/icon-container.css";
import "../blocks/header/icon.css";
import "../blocks/header/header-text.css";
import icon from "../assets/book-shelf.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="icon-container">
          <img className="icon" src={icon} alt="" />
        </div>
        <h1 className="header-text">Book search helper</h1>
      </header>
    </>
  );
};

export default Header;
