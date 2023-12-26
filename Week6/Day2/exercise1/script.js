const h1 = document.querySelector("h1");
console.log(h1);

document.querySelector("article > p:last-child").remove();

const h2 = document.querySelector("h2");

h2.addEventListener("click", (e) => {
  if (e.target.hasAttribute("style")) e.target.removeAttribute("style");
  else e.target.style = "background: red;";
});

const h3 = document.querySelector("h3");

h3.addEventListener("click", (e) => {
  e.target.setAttribute("style", "display: none;");
});

const pAll = document.querySelectorAll("p");
const btn = document.createElement("button");
btn.setAttribute("type", "button");
btn.textContent = "Make it BOLD!!!";
btn.addEventListener("click", function (e) {
  pAll.forEach((element) => (element.style = "font-weight: bold;"));
});
document.body.append(btn);

//    BONUS

const randomNumber = (max, min = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};

h1.addEventListener("mouseover", (e) => {
  e.target.style = `font-size: ${randomNumber(100)}px;`;
});

const opacityOnOff = (e) => {
  e.target.style.opacity = e.target.style.opacity == 1 ? 0 : 1;
  e.target.style.transition = "opacity 0.8s ease-in-out";
};

h2.addEventListener("mouseover", opacityOnOff);
