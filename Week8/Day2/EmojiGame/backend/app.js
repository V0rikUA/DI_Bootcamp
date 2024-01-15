import express from "express";
import { emojiRouter } from "./routes/emojis.routes.js";

const app = express();
const port = 5000;

const leaderboard = [{}];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("./public"));

app.use("/api", emojiRouter);

/**
 * TODO
 */
// app.get("/api/leaderboard", (req, res) => {
//   res.status(200).send(leaderboard);
// });

app.post("/api/emojis", (req, res) => {
  const { name, scoore } = req.body;
  updateLeaderboard();
});

app.listen(port, () => console.log(`Server is listening at port ${port}`));
