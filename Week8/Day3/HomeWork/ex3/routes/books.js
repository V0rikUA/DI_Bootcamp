const routes = require("express").Router();

const books = [];

routes.get("/books", (req, res) => {
  const result = [];
  books.map((book, index) => {
    const position = index + 1;
    result.push({ [position]: book });
  });
  res.send(result);
});
routes.post("/books", (req, res) => {
  const { newBook } = req.body;

  books.push({ name: newBook });
  res.sendStatus(200);
});
routes.put("/books", (req, res) => {
  const { bookId, bookName } = req.body;
  console.log(books);
  books[bookId - 1].name = bookName;
  res.sendStatus(200);
});

routes.delete("/books", (req, res) => {
  const { bookId } = req.body;
  books.splice(bookId - 1, 1);
  res.sendStatus(200);
});

module.exports = routes;
