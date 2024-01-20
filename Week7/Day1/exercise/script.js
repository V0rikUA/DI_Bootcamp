// Exercise 1: Location
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

/**The code provided will destructure the person object and print a message to the console.

The output will be:
"I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"
 */

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Exercise 2: Display Student Info
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

// Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert object to array
const userArray = Object.entries(users);

console.log(userArray);

// Modify the array by multiplying ID numbers by 2
const modifiedArray = userArray.map(([key, value]) => [key, value * 2]);

console.log(modifiedArray);

// Exercise 4: Person Class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");

/**
 * The output of this code will be "object" because member is an instance of the Person class, and instances of classes in JavaScript are objects.
 */

console.log(typeof member);

// Exercise 5: Dog Class
class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Option 2: Correct constructor for extending Dog class
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// Exercise 6: Challenges
// 1. False because arrays are reference types.
// 2. False because empty objects have distinct references.
// 3. Outputs: 4, 4, 5 (object1, object2, object3 are references to the same object, object4 is separate).
// 4. Animal and Mamal classes with an example object.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(sound) {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${sound}`;
  }
}

const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("moos"));
