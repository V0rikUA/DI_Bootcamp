import people from "./data.js";

const getAverageAge = (dataArray) => {
  let ageSum = 0;
  dataArray.map((person, index) => {
    ageSum += person.age;
  });
  const averageAge = ageSum / dataArray.length;
  return averageAge;
};

console.log(getAverageAge(people));
