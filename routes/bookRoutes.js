
const express = require("express");
const router = express.Router();

let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// Get all books
router.get("/", (req, res) => {
    res.json(books);
});

// Get a book by ID
router.get("/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found");
    res.json(book);
});

// Add a new book
router.post("/", (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    };
    books.push(book);
    res.status(201).json(book);
});

// Update a book by ID
router.put("/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found");

    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send("Book not found");

    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook);
});

module.exports = {
    router,
    getBooks: () => books,
};
