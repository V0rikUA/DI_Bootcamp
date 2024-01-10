const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    id: 1,
    title: "Exploring the Wonders of Space",
    content: "Content about space exploration and discoveries.",
  },
  {
    id: 2,
    title: "The Art of Cooking",
    content: "Content about cooking techniques and recipes.",
  },
  {
    id: 3,
    title: "Advancements in AI Technology",
    content: "Content about the latest advancements in AI.",
  },
  {
    id: 4,
    title: "The Beauty of Nature",
    content: "Content about various natural landscapes and ecosystems.",
  },
  {
    id: 5,
    title: "History's Greatest Mysteries",
    content: "Content about unsolved mysteries from history.",
  },
  {
    id: 6,
    title: "Fitness and Health Tips",
    content: "Content about fitness regimes and health tips.",
  },
  {
    id: 7,
    title: "World Travel: A Guide",
    content: "Content about traveling to different parts of the world.",
  },
  {
    id: 8,
    title: "The World of Video Games",
    content: "Content about new and popular video games.",
  },
  {
    id: 9,
    title: "Modern Art Movements",
    content: "Content about various modern art movements.",
  },
  {
    id: 10,
    title: "The Science Behind Climate Change",
    content: "Content about the science and impact of climate change.",
  },
];

app.get("/posts", (req, res) => {
  res.send(data);
});

app.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const resultPost = data.filter((item) => item["id"] == postId);

  resultPost === undefined || resultPost.length == 0
    ? res.status(404).send("Post not Found")
    : res.status(200).send(resultPost);
});

app.post("/posts", (req, res) => {
  const post = {
    id: data.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  data.push(post);
  res.status(201).send(post);
});

app.put("/posts/:id", (req, res) => {
  const post = data.find((item) => item["id"] === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  post.title = req.body.title;
  post.content = req.body.content;
  res.send(post);
});

app.delete("/posts/:id", (req, res) => {
  const postIndex = data.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (postIndex === -1) return res.status(404).send("Post not found");
  posts.splice(postIndex, 1);
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).send("404: Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500: Server Error");
});

//app.post("/posts", req);

app.listen(port);
