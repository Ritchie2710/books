import { useEffect } from "react";
import axios from "axios";

export default function BestBooks({ books, setBooks }) {
  async function getBooks() {
    const API = `https://books-wh5e.onrender.com/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  async function deleteBook(id) {
    const check = confirm("Are you sure you want to delete?");
    if (check) {
      const API = `https://books-wh5e.onrender.com/books/${id}`;
      await axios.delete(API);
      getBooks();
    } else {
      alert("THAT WAS CLOSE!");
    }
  }
  return (
    <>
      {!(books.title) ? (
        Array.from(books).map((book) => {
          return (
            <div className="book" key={book._id}>
              <h3>{book.title}</h3>
              <p><span>Description:</span> {book.description}</p>
              <p><span>Read?</span> {book.status}</p>
              <button onClick={() => deleteBook(book._id)}>Delete Book</button>
            </div>
          );
        })
      ) : (
        <h3>There are no books, please add some via the form below.</h3>
      )}
    </>
  );
}
