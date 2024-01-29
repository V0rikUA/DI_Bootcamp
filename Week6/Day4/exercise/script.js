function exercise1() {
  const colors = [
    "Blue",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow",
  ];

  colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
  });

  if (colors.includes("Violet")) {
    console.log("Yeah");
  } else {
    console.log("No...");
  }
}

function exercise2() {
  const colors = [
    "Blue",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow",
  ];
  const ordinal = ["th", "st", "nd", "rd"];

  colors.forEach((color, index) => {
    const order = index < 3 ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${order} choice is ${color}.`);
  });
}

function exercise3() {
  /**
   * 1 - Outputs: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
   * 2- Outputs: ['U', 'S', 'A']
   * 3-Outputs: [undefined, undefined]
   */
}

function exercise4() {
  const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    {
      firstName: "Jonathan",
      lastName: "Baughn",
      role: "Enterprise Instructor",
    },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
  ];
  const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
  const fullStackResidents = users.filter(
    (user) => user.role === "Full Stack Resident"
  );
  const lastNameOfResidents = users
    .filter((user) => user.role === "Full Stack Resident")
    .map((user) => user.lastName);
}

function exercise5() {
  const epic = [
    "a",
    "long",
    "time",
    "ago",
    "in a",
    "galaxy",
    "far far",
    "away",
  ];
  const epicPhrase = epic.reduce(
    (accumulator, currentValue) => `${accumulator} ${currentValue}`
  );
  console.log(epicPhrase);
}

function exercise6() {
  const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false },
  ];
  const passedStudents = students.filter((student) => student.isPassed);
  passedStudents.forEach((student) =>
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`
    )
  );
}
