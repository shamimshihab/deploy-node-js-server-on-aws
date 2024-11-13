const express = require("express");
const app = express();
const PORT = 3002;

const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

// Serve book list at the root URL
app.get("/", (req, res) => {
  res.json(bookRoutes.getBooks());
});

// Use book routes for the API
app.use("/api/books", bookRoutes.router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
