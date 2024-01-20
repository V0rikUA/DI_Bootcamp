let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// Arrow function to display the 3 fruits using forEach
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries(); // Invoke the displayGroceries function

// Arrow function to clone client and groceries
const cloneGroceries = () => {
  let user = client; // user is a copy of client

  // Changing the value of client
  client = "Betty";

  let shopping = groceries; // shopping is a reference to the groceries object

  // Changing the totalPrice and paid properties
  shopping.totalPrice = "35$";
  shopping.other.paid = false;

  console.log("Modified values in cloneGroceries function:");
  console.log("user:", user);
  console.log("shopping:", shopping);
};

cloneGroceries(); // Invoke the cloneGroceries function
