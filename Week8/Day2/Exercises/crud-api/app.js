import express from "express";
import fetchPosts from "./data/dataService.js";
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/posts", (req, res) => {
  fetchPosts()
    .then((response) => {
      return response.status == 200
        ? response.data
        : Promise.reject(response.statusText);
    })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.listen(port);
