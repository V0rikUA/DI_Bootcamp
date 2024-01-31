const handleSubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;

  const jsonData = JSON.stringify({ name: name, lastname: lastName });
  console.log(jsonData);

  const output = document.createElement("p");
  output.textContent = jsonData;
  document.getElementById("output").append(output);
};

const form = document.getElementById("myForm");
const submit = document.getElementById("submit");

submit.addEventListener(onclick, (e) => handleSubmit(e));
