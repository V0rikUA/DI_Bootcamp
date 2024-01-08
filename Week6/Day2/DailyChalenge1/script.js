const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
let noun;
let adjective;
let person;
let verb;
let place;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  noun = document.getElementById("noun").value;
  adjective = document.getElementById("adjective").value;
  person = document.getElementById("person").value;
  verb = document.getElementById("verb").value;
  place = document.getElementById("place").value;

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields");
    return;
  }

  const story = `Today I went to ${place} with ${person}. We saw a ${adjective} ${noun} that decided to ${verb} right in the middle of the street! Just as we thought the day couldn't get any weirder, a group of musicians started playing nearby, drawing a crowd. To our surprise, ${person} began to dance, attracting cheers from the onlookers. Suddenly, the ${adjective} ${noun} joined in, moving to the rhythm in an odd but amusing way. As the sun began to set over ${place}, we found a cozy café and decided to grab a bite. It was there that ${person} told me the most fascinating story about their childhood in this very town. Reflecting on the day's events as we walked back, we both agreed it was one of the most memorable days we'd ever had in ${place}.`;
  storySpan.textContent = story;
});

const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Shuffle";
document.body.appendChild(shuffleButton);

shuffleButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields");
    return;
  }
  const stories = [
    `Once upon a time in ${place}, there was a ${adjective} ${noun} which always liked to ${verb} with ${person}.`,
    `${person} and I found a ${adjective} ${noun} in ${place}. It started to ${verb} unexpectedly!`,
    `In ${place}, a ${noun} was spotted doing a ${verb} dance. It was so ${adjective}, and ${person} couldn't stop laughing.`,
  ];

  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  storySpan.textContent = randomStory;
  console.log(person);
});
