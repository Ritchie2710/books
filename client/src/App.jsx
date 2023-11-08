import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Book from "./pages/Book";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BrowserRouter>
      <header>
        <h1>Our Books</h1>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
        <Route path="/about" element={<About />} />
        <Route path= "/book/:id" element={<Book  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
