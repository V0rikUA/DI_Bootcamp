const routes = require("express").Router();

const todo = [];

routes.get("/todos", (req, res) => {
  const result = [];
  todo.map((todoItem, index) => {
    const position = index + 1;
    result.push({ [position]: todoItem });
  });
  res.send(result);
});
routes.post("/todos", (req, res) => {
  const { newItem } = req.body;

  todo.push({ todoItem: newItem, completed: false });
  res.sendStatus(200);
});
routes.put("/todos", (req, res) => {
  const { itemId } = req.body;
  todo[itemId - 1].completed = true;
  res.sendStatus(200);
});

routes.delete("/todos", (req, res) => {
  const { itemId } = req.body;
  todo.splice(itemId - 1, 1);
  res.sendStatus(200);
});

module.exports = routes;
