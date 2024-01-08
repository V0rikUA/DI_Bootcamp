const divAnimated = document.querySelector("#animate");
const divContainer = document.querySelector("#container");
const btn = document.querySelector("button");

let posX = 0;
let posY = 0;

const posXMax = divContainer.offsetWidth - divAnimated.offsetWidth;
const posYMax = divContainer.offsetHeight - divAnimated.offsetHeight;

function onClickMoveDivAnimated() {
  console.log(divAnimated);
  const intervalId = setInterval(function () {
    if (posX == posXMax) clearInterval(intervalId);
    else {
      divAnimated.style.left = `${posX}px`;
      posX++;
    }
  }, 1);
}

btn.addEventListener("click", onClickMoveDivAnimated);
