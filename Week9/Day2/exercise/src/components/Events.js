import React from "react";

export default function Events() {
  const [isToggleOn, setToogleOn] = React.useState("true");

  const onClickToogleSwtich = (e) => {
    if (isToggleOn) {
      setToogleOn(false);
      e.target.textContent = "OFF";
    } else {
      setToogleOn(true);
      e.target.textContent = "ON";
    }
  };

  const clickMe = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") alert("Enter key was pressed");
  };

  return (
    <div>
      <button onClick={clickMe}>ok</button>
      <input onKeyDown={handleKeyDown}></input>
      <button onClick={onClickToogleSwtich}>ON</button>
    </div>
  );
}
