import "../blocks/cards/card.css";
import "../blocks/cards/image-container.css";
import "../blocks/cards/image.css";
const Card = ({ image, name, occupation, onClick }) => {
  return (
    <>
      <li className="card" onClick={() => onClick()}>
        <div className="image-container">
          <img className="image" src={image} alt={`of ${name}`} />
        </div>
        <p>Name: {name}</p>
        <p>Occupation: {occupation}</p>
      </li>
    </>
  );
};

export default Card;
