const express = require("express");
const app = express();
const port = 5000;

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  { id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
  },
  {
    id: 6,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 1954,
  },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
  { id: 8, title: "Moby Dick", author: "Herman Melville", publishedYear: 1851 },
  { id: 9, title: "War and Peace", author: "Leo Tolstoy", publishedYear: 1869 },
  {
    id: 10,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishedYear: 1866,
  },
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const bookId = req.params.id;
  const resultBook = books.filter((item) => item["id"] == bookId);
  resultBook === undefined || resultBook.length == 0
    ? res.status(404).send("book not Found")
    : res.status(200).json(resultBook);
});

app.post("/api/books", (req, res) => {
  const newBook = req.body;
  console.log(newBook);
  books.push(
    new Object({
      id: books.length + 1,
      ...newBook,
    })
  );

  res.status(201).json(books);
});

app.use((req, res) => {
  res.status(404).send("404: Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500: Server Error");
});

app.listen(port, () => console.log(`app is listening on port ${port}!`));
