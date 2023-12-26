// function someFunction(myAge) {
//   const myMomAge = myAge * 2;
//   const myDadAge = myMomAge * 1.2;
//   console.log(`My moms age is: ${myMomAge}\nMy dads age is: ${myDadAge}`);
// }

// const myAge = 28;
// someFunction(myAge);

// const myMomAge = (myAge) => {
//   return myAge * 2;
// };

// console.log(`My moms age is: ${myMomAge(myAge)}`);

//const h1 = document.querySelector("h1"); //seatch by tag

// const li2 = document.querySelector("#secondListSelector"); //search by id

// const li1 = document.querySelector(".firstListSelector"); //search by class

// const htmlAllSecontList = document.querySelectorAll(".secondList");

// console.log(htmlAllSecontList);

// const divFirstWay = document.querySelector("#container");
// const divSecondWay = document.getElementById("container");

// console.log(divFirstWay, divSecondWay);

// const listNodes = document.querySelectorAll(".list");
// listNodes.forEach((element) => {
//   console.log(element.textContent);
// });

// const listNodesSecondWay = document.querySelectorAll("ul>li");
// console.log(listNodesSecondWay);
// for (let node in listNodesSecondWay) {
//   console.log(listNodesSecondWay[node].textContent);
// }

// const firstLi = document.querySelector("ul>li:first-child");
// console.log(firstLi);

//for(let keys in listNodes)

// const div = document.querySelector("div");

// console.log(div.hasAttribute("id"));

// console.log(div.getAttribute("id"));

// div.setAttribute("class", "red");

// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://th.bing.com/th/id/OIP.v858C8rXD4SW3N3kvaE5ugHaFj?rs=1&pid=ImgDetMain"
// );
// img.setAttribute("style", "max-width:200px");
// div.append(img);

const link = document.querySelector("a");
// const atributesNode = link.attributes;
// Object.values(atributesNode).forEach((atribute) => {
//   console.log(atribute.value);
// });
// console.log(atributesNode);

const text = document.querySelector("#text");
text.setAttribute("style", "font-size: 20px; background-color: yellow;");
