// const select = document.querySelector("#school-type");
// console.log(select.options[1].value);
// select.append(new Option("Work", "work"));
// select.prepend(new Option("Primary School", "primarySchool"));
// //select.options.

// function isertRow() {
//   const table = document.querySelector("table");
//   const trs = document.querySelectorAll("tr").length;
//   const newRow = document.createElement("tr");
//   const td1 = document.createElement("td");
//   const td2 = document.createElement("td");
//   td1.innerText = `Row${trs}`
// }

// console.log(tableRow);

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");

// function RespondClick(e) {
//   e.target.style = "background: red;";
//   console.log("Button Clicked");
// }

// function RespondMouseOver() {
//   console.log("My mouse is over the btn");
// }

// function RespondMouseOut() {
//   console.log("My mouse is out of the btn");
// }

// btn1.addEventListener("click", RespondClick);
// btn1.addEventListener("mouseover", RespondMouseOver);
// btn1.addEventListener("mouseout", RespondMouseOver);

// btn2.addEventListener("click", RespondClick);
// btn2.addEventListener("mouseover", RespondMouseOver);
// btn2.addEventListener("mouseout", RespondMouseOver);

// function submitFunction(e) {
//   e.preventDefault();
// }

// const form = document.form[0];
// form.addEventListener("submit", submitFunction);

// function sayHi() {
//   alert("Hello");
// }

// setTimeout(sayHi, 2000);

// function sayHi2(name) {
//   alert(`Hello ${name}`);
// }

// setTimeout(sayHi2, 2000, "Dima"); //not async

// function sayHi() {
//   alert("Hello");
// }
// let id = setTimeout(sayHi, 2000);

// setInterval(() => {
//   console.log("HI");
// }, 1000); // invoke console.log each 1000ms

// let div = document.querySelector("div");
// let counter = 5;

// let id = setInterval(() => {
//   if (counter == 0) clearInterval(id);
//   div.textContent = `Time ends in ${counter}sec`;
//   counter--;
// }, 1000);

const child = document.getElementById("child");

let pos = 0;

let id = setInterval(() => {
  if (pos == 400) clearInterval(id);
  child.style.left = pos + "px";
  child.style.top = pos + "px";
  pos++;
}, 1);
