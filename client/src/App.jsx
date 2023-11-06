import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <>
      <div>Testing testing</div>
      <BestBooks books={books} setBooks={setBooks} />
    </>
  );
}

export default App;
