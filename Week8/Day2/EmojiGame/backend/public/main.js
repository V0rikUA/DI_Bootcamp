const chkAnswerButton = document.getElementById("check-answer");
const startGameButton = document.getElementById("start-game__button");
const showHintButton = document.getElementById("hint-button");
let userScore = 0;
let userName = "";
let correctAnswer;
let emojiNameHint;

const getNewEmojis = async () => {
  const { randomEmoji, emojisName } = await fetchApi("/emojis")
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err.message));
  correctAnswer = randomEmoji;
  emojiNameHint = emojisName;
};

const renderNewGame = async () => {
  const emojiDiv = document.getElementById("emoji");
  await getNewEmojis();
  emojiDiv.textContent = correctAnswer.emoji;
};

const loadGameOnClick = (e) => {
  const gameContainer = document.getElementById("emoji-question");
  const loginContainer = document.getElementById("start-game");
  userName = document.getElementById("user-name-input").value;

  renderNewGame();

  loginContainer.classList.toggle("hidden");
  gameContainer.classList.toggle("hidden");

  startGameButton.removeEventListener("click", loadGameOnClick);
};

const fetchApi = async (path) => {
  return await fetch("http://localhost:5000/api" + path).then((response) =>
    response.ok ? response.json() : Promise.reject(response.statusText)
  );
};

const updateLeaderboard = () => {
  if (userScore > 0) {
    const newScore = document.createElement("li");
    newScore.textContent = `${userName}: ${userScore}`;
    document.getElementById("leaderboard-list").append(newScore);
  }
};

const checkAnswerOnClick = async (e) => {
  e.preventDefault();
  const inputAnswer = document.getElementById("user-answer");
  const userScoreElement = document.getElementById("user-score");

  console.log(inputAnswer.value.toLowerCase());

  console.log(correctAnswer.name);

  if (inputAnswer.value.toLowerCase() == correctAnswer.name.toLowerCase()) {
    inputAnswer.value = "";
    userScoreElement.textContent = ++userScore;
    renderNewGame();
  } else {
    updateLeaderboard();
    inputAnswer.value = "";
    userScoreElement.textContent = userScore = 0;
    renderNewGame();
  }
};

startGameButton.addEventListener("click", loadGameOnClick);
chkAnswerButton.addEventListener("click", checkAnswerOnClick);
//showHintButton.addEventListener("click", showHintOnClick); TODO
