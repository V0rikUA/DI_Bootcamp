/*                       TASK 1                      */
console.log("Task 1");
const consoleTaskDevider = () => {
  console.log("________________________________________________");
};

//                 PART 1
const people = ["Greg", "Mary", "Devon", "James"];

//1
let indexOfGreg = people.indexOf("Greg");
people.splice(indexOfGreg, 1);

//2
let indexOfJames = people.indexOf("James");
people.splice(indexOfJames, 1, "Jason");

//3
people.push("Dmitriy");

//4
let indexOfMarry = people.indexOf("Mary");
console.log(indexOfMarry);

//5
let indexOfDmitriy = people.indexOf("Dmitriy");
let peopleCopy = people.slice(indexOfMarry + 1, indexOfDmitriy);

/**
 * 6. Returns -1 because value not presented in people array
 */
let indexOfFoo = people.indexOf("Foo");

/*7*/
let last = people[people.length - 1];
consoleTaskDevider();
//                        PART 2
//1
people.forEach((name) => {
  console.log(name);
});
consoleTaskDevider();
//2
for (let index in people) {
  console.log(people[index]);
  if (people[index] == "Devon") {
    break;
  }
}
consoleTaskDevider();
/*___________________________________________________________*/

const colorsArray = ["blue", "red", "black", "white", "brown"];

const suffixes = {
  1: "st",
  2: "nd",
  3: "rd",
  4: "th",
};

for (let i = 1; i <= colorsArray.length; i++) {
  console.log(
    `My ${i}${i >= 4 ? suffixes[4] : suffixes[i]} choice is ${
      colorsArray[i - 1]
    }`
  );
}
consoleTaskDevider();
/*___________________________________________________________*/

let number = prompt("Please enter a number greater than 10.");

// Continue prompting the user until they enter a valid number greater than 10
while (typeof number !== "number" || isNaN(number) || number <= 10) {
  // Convert the string from prompt to a number if it is not already a number
  number = Number(number);

  // If the input is not a number after conversion or is NaN, prompt for a number again
  if (isNaN(number)) {
    number = prompt(
      "That's not a number. Please enter a number greater than 10."
    );
  } else if (number <= 10) {
    number = prompt(
      "The number must be greater than 10. Please enter a new number."
    );
  }
}

console.log("Thank you, you entered:", number);
/*___________________________________________________________*/

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);
console.log(
  building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
);
let secondTenant = building.nameOfTenants[1];
console.log(secondTenant, building.numberOfRoomsAndRent[secondTenant][0]);
