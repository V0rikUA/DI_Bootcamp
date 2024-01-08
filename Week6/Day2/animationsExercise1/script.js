const div = document.querySelector("div");
const button = document.querySelector("#clear");

const newParagraph = () => {
  const paragraph = document.createElement("p", { id: "container" });
  paragraph.textContent = "Hello World";
  return paragraph;
};

setTimeout(() => {
  alert("Hello World");
  div.append(newParagraph());
}, 2000);

const intervalId = setInterval(function () {
  div.append(newParagraph());
}, 2000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
});
