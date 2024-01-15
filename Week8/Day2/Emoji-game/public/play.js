let randomEmoji = {};

const getEmojiAPI = () => {
  fetch("http://localhost:3000/emojis")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      randomEmoji = data.randomEmoji;
      render(data.shuffleEmoji, data.randomEmoji);
    });
};

getEmojiAPI();

const render = (emoji, options) => {
  const root = document.getElementById("root");
  const html = options.map((item) => {
    return item.name + " ";
  });
  root.innerHTML = `Options: ${html.join("")} Hint:${emoji.emoji}`;
};

const guessTheEmoji = () => {
  const guess = document.getElementById("guess").value;
  fetch("localhost:3000/emojis", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ guess, name: randomEmoji.name }),
  })
    .then((res) => res.json())
    .then((msg) => {
      console.log(msg);
      document.getElementById("message").innerHTML = `<h1>${msg}</h1>`;
    })
    .catch((err) => console.log(err));
};
