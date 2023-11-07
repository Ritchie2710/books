import { useEffect } from "react";
import axios from "axios";

export default function BestBooks({ books, setBooks }) {
  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {books
        ? Array.from(books).map((book) => {
            return (
              <div key={book._id}>
                <h3>{book.title}</h3>
                <h4>Description: {book.description}</h4>
                <h4>Read? {book.status}</h4>
              </div>
            );
          })
        : prompt("There are no books")}
    </>
  );
}
