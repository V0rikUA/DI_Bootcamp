/*                           Exercise 1                  */

/**
 *  Find the numbers that are divisible by a given number, log them, and also log their sum to the console.
 * @param {Number} devisor Takes a value of the type Number, with a default setting of 23.
 */
const displayNumbersDivisible = (devisor = 23) => {
  let sum = 0;
  for (let index = 0; index <= 500; index++) {
    if (index % devisor == 0) {
      console.log(index);
      sum += index;
    }
  }
  console.log(sum);
};

displayNumbersDivisible();

/*                           Exercise 2                  */
let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

/**
 *Calculates the total cost of items in a shopping list.
 *
 * @param {string[]} [items=shoppingList] - An array of item names.
 *      The function will calculate the total cost based on these items.
 *      Defaults to a predefined array 'shoppingList' if no array is provided.
 * @returns {number} The total cost of the items from the provided list
 *      that are available in stock.
 */
function myBill([...args] = shoppingList) {
  let bill = 0;
  args.forEach((item) => {
    if (Object.hasOwn(stock, item.toString()) && stock[item] > 0) {
      bill += prices[item];
      stock[item] -= 1;
    }
  });
  return bill;
}

console.log(myBill());

/*                           Exercise 3                  */

/**
 * Determines if the total amount of change provided is sufficient to cover a given item price.
 *
 * @param {number} itemPrice - The price of the item.
 * @param {number[]} change - An array representing the quantity of each type of coin.
 *        The array should contain four elements in the following order:
 *        quarters, dimes, nickels, and pennies.
 *        - quarters: Number of quarters (each worth 0.25).
 *        - dimes: Number of dimes (each worth 0.10).
 *        - nickels: Number of nickels (each worth 0.05).
 *        - pennies: Number of pennies (each worth 0.01).
 * @returns {boolean} Returns true if the total amount of change is equal to or greater
 *          than the item price, otherwise returns false.
 */
function changeEnough(itemPrice, [quarters, dimes, nickel, penny]) {
  quarters *= 0.25;
  dimes *= 0.1;
  nickel *= 0.05;
  penny *= 0.01;

  const sum = quarters + dimes + nickel + penny;

  return sum >= itemPrice ? true : false;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));

/*                           Exercise 4                  */

/**
 * Calculates the total cost of staying in a hotel for a given number of nights.
 *
 * @param {number} nights - The number of nights to stay in the hotel.
 * @returns {number} The total cost for the stay, calculated as the number of nights
 *                   multiplied by the price per night.
 */
function hotelCost(nights) {
  const price = 140;
  return nights * price;
}

/**
 * Calculates the cost of a plane ride to a specified destination.
 *
 * The function looks up the cost of a plane ride to various predefined destinations. If the
 * specified destination is not in the list, a default cost is returned. The cost is determined
 * based on a predefined set of destinations and their corresponding costs.
 *
 * @param {string} userDestination - The name of the destination to look up.
 *                                   This should be a string and is case-insensitive.
 * @returns {number} The cost of the plane ride to the specified destination. If the destination
 *                   is not recognized, returns the default cost for 'OtherDestination'.
 */
function planeRideCost(userDestination) {
  const destination = {
    london: 183,
    paris: 220,
    OtherDestination: 300,
  };

  userDestination.toLowerCase();

  return Object.hasOwn(destination, userDestination)
    ? destination[userDestination]
    : destination.OtherDestination;
}

/**
 * Calculates the total cost of renting a car based on the number of days rented.
 *
 * The function applies a discount to the daily rate if the car is rented for more than 10 days.
 * The discount is calculated as a percentage of the standard daily rate.
 *
 * @param {number} days - The number of days the car will be rented.
 * @returns {number} The total cost of the rental. This cost includes a discount if
 *                   the car is rented for more than 10 days.
 */
function rentalCarCost(days) {
  const price = 40;
  const discount = 0.05;
  const discountedPrice = price - price * discount;
  return days > 10 ? discountedPrice * days : price * days;
}

/**
 * Calculates the total cost of a vacation including hotel, plane ride, and car rental expenses.
 *
 * This function uses three other functions - `hotelCost`, `planeRideCost`, and `rentalCarCost` -
 * to calculate the respective costs. It prompts the user to input the number of nights for the hotel
 * stay, the destination for the plane ride, and the number of days for the car rental.
 * It ensures that the inputs for the number of nights and car rental days are valid numbers.
 *
 * @returns {number} The total cost of the vacation, summing up the costs of the hotel stay,
 *                   plane ride, and car rental.
 */
function totalVacationCost() {
  let sum = 0;
  const inputIsANumber = (message, messageIfNAN) => {
    let result = prompt(message);
    while (isNaN(result) || result < 1) {
      result = prompt(messageIfNAN);
    }
    return result;
  };

  let input = inputIsANumber(
    "How many nights do you want to spend in a hotel?",
    "Enter the correct number of nights you want to spend in a hotel?"
  );

  sum += hotelCost(input);

  input = prompt("Enter your destination");
  sum += planeRideCost(input);

  input = inputIsANumber(
    "For how many days do you want to rent a car?",
    "Enter the correct number of days you want to rent a car"
  );
  sum += rentalCarCost(input);

  return sum;
}

/*                           Exercise 5                  */
// Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// Change the name “Pete” to “Richard”
const listItems = document.querySelectorAll(".list li");
listItems.forEach((item) => {
  if (item.textContent === "Pete") {
    item.textContent = "Richard";
  }
});

// Delete the second <li> of the second <ul>
const secondUl = document.querySelector(".list:nth-child(2)");
if (secondUl) {
  const secondLi = secondUl.querySelector("li:nth-child(2)");
  if (secondLi) {
    secondLi.remove();
  }
}

// Change the name of the first <li> of each <ul> to your name
const uls = document.querySelectorAll(".list");
uls.forEach((ul) => {
  const firstLi = ul.querySelector("li");
  if (firstLi) {
    firstLi.textContent = "Your Name"; // Replace "Your Name" with your actual name
  }
});

// Add a class called student_list to both of the <ul>'s
uls.forEach((ul) => {
  ul.classList.add("student_list");
});

// Add the classes university and attendance to the first <ul>
const firstUl = document.querySelector(".list:first-child");
if (firstUl) {
  firstUl.classList.add("university", "attendance");
}

// Add a “light blue” background color and some padding to the <div>
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// Do not display the <li> that contains the text node “Dan”
const danLi = document.querySelector(".list:first-child li:last-child");
if (danLi) {
  danLi.style.display = "none";
}

// Add a border to the <li> that contains the text node “Richard”
const richardLi = document.querySelector(".list li:nth-child(2)");
if (richardLi) {
  richardLi.style.border = "1px solid black";
}

// Change the font size of the whole body
document.body.style.fontSize = "16px"; // Adjust the font size as needed

// Bonus: Check the background color and alert "Hello x and y" if it's "lightblue"
if (containerDiv.style.backgroundColor === "lightblue") {
  const users = document.querySelectorAll(".list li");
  const userNames = [];
  users.forEach((user) => {
    userNames.push(user.textContent);
  });
  alert(`Hello ${userNames.join(" and ")}`);
}

/*                           Exercise 6                  */
// Change the value of the id attribute from navBar to socialNetworkNavigation
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// Create a new <li> tag
const newLi = document.createElement("li");

// Create a new text node with "Logout"
const textNode = document.createTextNode("Logout");

// Append the text node to the newly created <li> element
newLi.appendChild(textNode);

// Append the updated <li> element to the <ul> using appendChild
const ul = navBar.querySelector("ul");
ul.appendChild(newLi);

// Retrieve the first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display the text of each link using textContent
console.log("First link: " + firstLi.textContent);
console.log("Last link: " + lastLi.textContent);
