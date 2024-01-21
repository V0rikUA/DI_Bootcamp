import { useState } from "react";
import "../blocks/splitbutton/splitbutton__select.css";
import "../blocks/splitbutton/splitbutton.css";
import "../blocks/splitbutton/splitbutton__button.css";
export default function ActionButtonComponent({
  firstInput,
  secondInput,
  onClick,
}) {
  const [action, setAction] = useState("Sum");

  const handleButtonOnClick = (e) => {
    switch (action) {
      case "Sum":
        onClick(firstInput + secondInput);
        break;
      case "Subtract":
        onClick(firstInput - secondInput);
        break;
      case "Multiply":
        onClick(firstInput * secondInput);
        break;
      default:
        onClick(firstInput / secondInput);
        break;
    }
  };

  return (
    <div className="splitbutton">
      <button className="splitbutton__button" onClick={handleButtonOnClick}>
        {action}
      </button>
      <select
        className="splitbutton__select"
        onChange={(e) => setAction(e.target.value)}
      >
        <option value={"Sum"}>Sum</option>
        <option value={"Subtract"}>Subtract</option>
        <option value={"Multiply"}>Multiply</option>
        <option value={"Divide"}>Divide</option>
      </select>
    </div>
  );
}
