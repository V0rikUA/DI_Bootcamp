// const user = {
//   firstName: "",
//   lastName: "",
//   setCredentials: function (fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   },
// };

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // const firstName = document.getElementById("fname").value;
  // const lastName = document.getElementById("lname").value;

  const firstName = document.getElementsByName("firstname")[0];
  const lastName = document.getElementsByName("lastname")[0];
  const answerList = document.querySelector(".usersAnswer");

  function resetFields() {
    firstName.value = "";
    lastName.value = "";
  }
  const addUserAnswer = (name, lastname) => {
    const liName = document.createElement("li");
    const liLastName = document.createElement("li");
    const liDate = document.createElement("li");

    liDate.textContent = new Date().toUTCString();
    liName.textContent = `User name is: ${name}`;
    liLastName.textContent = `User last name is: ${lastname}`;
    answerList.append(liName, liLastName, liDate);
  };
  if (firstName.value == "" || lastName.value == "") {
    alert("Enter correct Info!");
    resetFields();
  } else {
    alert("Form submited!");
    console.log("First Name:", firstName.value);
    console.log("Last Name:", lastName.value);
    addUserAnswer(firstName.value, lastName.value);
    resetFields();
  }
});
