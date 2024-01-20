import "../blocks/vote-list/__item/vote-list__item.css";
import "../blocks/vote-list/__item/vote-list__item-text.css";
import "../blocks/vote-list/__item/vote-list__item-button.css";

export default function LanguageVoteItem({ name, votes, onClick }) {
  return (
    <li className="vote-list__item">
      <p className="vote-list__item-text">{votes}</p>
      <p className="vote-list__item-text">{name}</p>
      <button
        className="vote-list__item-button vote-list__item-text"
        onClick={onClick}
      >
        Click Here
      </button>
    </li>
  );
}
