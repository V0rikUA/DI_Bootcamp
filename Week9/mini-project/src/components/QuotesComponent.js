import { useState } from "react";
import "../blocks/quotes/__container/quotes__container.css";
import "../blocks/quotes/__text/quotes__text.css";
import "../blocks/quotes/__button/quotes__button.css";
import "../blocks/quotes/__text/quotes__text-author.css";

export default function QuotesComponent({ fontColor, quote, author, onClick }) {
  return (
    <div className="quotes__container">
      <quote style={{ color: fontColor }} className="quotes__text">
        "{quote}"
      </quote>
      <p
        style={{ color: fontColor }}
        className="quotes__text quotes__text-author"
      >
        -{author}-
      </p>
      <button
        onClick={onClick}
        style={{ backgroundColor: fontColor }}
        className="quotes__button"
      >
        Next quote
      </button>
    </div>
  );
}
