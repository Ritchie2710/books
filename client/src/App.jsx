import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BrowserRouter>
      <header>
        <H1>Our Books</H1>
        <link to="/"> Home</link>
        <link to="/about"> About</link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <div>Testing testing</div>
      <BestBooks books={books} setBooks={setBooks} />
    </BrowserRouter>
  );
}

export default App;
