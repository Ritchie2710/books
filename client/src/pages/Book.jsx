import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Book() {
  const params = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = `https://books-wh5e.onrender.com/books?_id=${params.id}`;

    const res = await axios.get(API);
    setBook(res.data[0]);
  }

  return (
    <>
      <h2>{book.title}</h2>
      <img id="book-img"src={book.imgUrl} />
      <p>{book.description}</p>
      <p>{book.status}</p>
      {book.title && <Form book={book} setBook={setBook} />}
    </>
  );
}
