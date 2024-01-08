let addressNumber, addressStreet, country;
addressNumber = 15;
addressStreet = "Shahov";
country = "Israe";
let globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;
// let globalAddress =
//   "I live in " + addressStreet + " " + addressNumber + ", in " + country;
// console.log(globalAddress);

let myBirthDate = 1994;
let nextYearDate = 2024;
console.log(`I will be ${nextYearDate - myBirthDate} in ${nextYearDate}`);

let array = [2, 3, 4, 34, 34, 4];
let array1 = array.slice(1);
//console.log(array.splice(1, 2, 123, 123));
console.log(array1);

let petsArray = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(petsArray[1]);
petsArray.splice(3, 1, "horse");
console.log(petsArray);
console.log(petsArray.length);
