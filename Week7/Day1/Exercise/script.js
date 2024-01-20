/*                        Exercise 1                                              */
const exercise1 = () => {
  // #1
  function funcOne() {
    let a = 5;
    if (a > 1) {
      a = 3;
    }
    alert(`inside the funcOne function ${a}`);
  }

  // #1.1 - run in the console:
  funcOne(); // Predicted value of a: 3
  // Explanation: The variable `a` is initially set to 5, but it is later reassigned to 3 inside the if block.

  // #1.2 What will happen if the variable is declared with const instead of let?
  // You will get an error because you cannot reassign a constant (const) variable.

  {
    //#2
    let a = 0;
    function funcTwo() {
      a = 5;
    }

    function funcThree() {
      alert(`inside the funcThree function ${a}`);
    }

    // #2.1 - run in the console:
    funcThree(); // Predicted value of a: 0
    funcTwo();
    funcThree(); // Predicted value of a: 5
    // Explanation: Initially, `a` is set to 0. Then, `funcTwo` reassigns `a` to 5, which is reflected in `funcThree`.

    // #2.2 What will happen if the variable is declared with const instead of let?
    // If `a` is declared with const, you will get an error when trying to reassign it in `funcTwo`.
  }
  //#3
  function funcFour() {
    window.a = "hello";
  }

  function funcFive() {
    alert(`inside the funcFive function ${a}`);
  }

  // #3.1 - run in the console:
  funcFour();
  funcFive(); // Predicted value of a: "hello"
  // Explanation: `funcFour` sets a global variable `a` on the `window` object, which can be accessed by `funcFive`.

  {
    //#4
    let a = 1;
    function funcSix() {
      let a = "test";
      alert(`inside the funcSix function ${a}`);
    }

    // #4.1 - run in the console:
    funcSix(); // Predicted value of a (inside funcSix): "test"
    // Explanation: Inside `funcSix`, a new local variable `a` is declared, which shadows the outer `a`.

    // #4.2 What will happen if the variable is declared with const instead of let?
    // If declared with const, you'll still get a local constant variable `a` inside `funcSix`.
  }
  //#5
  let a = 2;
  if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
  }
  alert(`outside of the if block ${a}`); // Predicted value of a: 2
  // Explanation: Inside the if block, a new local variable `a` is declared and set to 5, but it does not affect the outer `a`.

  // #5.1 - run the code in the console
  // #5.2 What will happen if the variable is declared with const instead of let?
  // If declared with const, you'll still get a local constant variable `a` inside the if block, and the outer `a` remains unaffected.
};

/*                        Exercise 2                                              */
const winBattle = () => true; // Transformed into an arrow function

const experiencePoints = winBattle() ? 10 : 1; // Ternary operator to assign value

console.log(experiencePoints); // Output the value of experiencePoints

/*                        Exercise 3                                              */

const isString = (value) => typeof value === "string";

console.log(isString("hello")); // true
console.log(isString([1, 2, 4, 0])); // false

/*                        Exercise 4                                             */
const addNumbers = (a, b) => a + b;

/*                        Exercise 5                                             */
function kgToGramsDeclaration(weightInKg) {
  return weightInKg * 1000;
}

const result1 = kgToGramsDeclaration(2);
console.log(result1);

const kgToGramsExpression = function (weightInKg) {
  return weightInKg * 1000;
};

const result2 = kgToGramsExpression(2);
console.log(result2);

const kgToGramsArrow = (weightInKg) => weightInKg * 1000;

const result3 = kgToGramsArrow(2);
console.log(result3);

/*                        Exercise 6                                             */
(function (numberOfChildren, partnerName, geographicLocation, jobTitle) {
  const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  const fortuneElement = document.getElementById("fortune");
  fortuneElement.textContent = sentence;
})(3, "Alice", "New York", "Software Engineer");

/*                        Exercise 7                                             */

// Self-invoking function to welcome the user
(function (userName) {
  // Create a div element for the user's welcome message and profile picture
  const welcomeDiv = document.createElement("div");
  welcomeDiv.classList.add("user-welcome"); // Add a CSS class for styling

  // Create a paragraph for the welcome message
  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = `Welcome, ${userName}!`; // Display the user's name
  welcomeDiv.appendChild(welcomeMessage);

  // Create an image element for the user's profile picture
  const profilePicture = document.createElement("img");
  profilePicture.src =
    "https://www.pngall.com/wp-content/uploads/5/Profile.png"; // Set the profile picture source
  profilePicture.alt = `${userName}'s Profile Picture`; // Add alt text for accessibility
  welcomeDiv.appendChild(profilePicture);

  // Add the welcome div to the Navbar
  const navbar = document.getElementById("navbar");
  navbar.appendChild(welcomeDiv);
})("John"); // Pass the user's name as an argument (e.g., "John")

/*                        Exercise 7                                             */

export function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }

  addIngredients("apple", "banana", "orange");
  addIngredients("strawberry", "kiwi", "pineapple");

  function displayJuice() {
    const message = `The client wants a ${size} juice, containing ${ingredients.join(
      ", "
    )}`;
    document.getElementById("output").textContent = message;
  }

  displayJuice();
}

// Attach a click event listener to the button
document.getElementById("makeJuiceButton").addEventListener("click", () => {
  makeJuice("medium"); // Call the makeJuice function when the button is clicked
});
