let allBoldItems;
let p = document.querySelector("p");

function getBoldItems() {
  allBoldItems = document.getElementsByTagName("strong");
}

function highlight() {
  for (let element of allBoldItems) {
    element.style.color = "blue";
  }
}

function returnItemsToDefault() {
  for (let element of allBoldItems) {
    element.style.color = "black";
  }
}

getBoldItems();

p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", returnItemsToDefault);
