import React from "react";

export default function Color() {
  const [color, setColor] = React.useState("Red");

  const changeColorOnClick = () => {
    setColor("blue");
  };

  React.useEffect(() => {
    alert("useEffect reached");
  }, []);

  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button onClick={changeColorOnClick}>change color</button>
    </div>
  );
}
