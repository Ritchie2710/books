const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const mongoose = require("mongoose");
const Book = require("./models/book");
mongoose.connect(process.env.MONGO_URL);

app.get("/", (request, response) => {
  response.json("Testing message");
});

app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
