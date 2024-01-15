import express from "express";
import { emojis } from "./emojis/emojis.js";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const shuffleArray = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];
  const shuffleEmojis = shuffleArray(emojis);
  res.json({ shuffleEmojis, randomEmoji });
});

app.post("/e,ogis", (req, res) => {
  const { name, guess } = req.body;
  if (name == guess) return res.json({ message: "Correct" });
  res.json({ message: "Not Correct" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
