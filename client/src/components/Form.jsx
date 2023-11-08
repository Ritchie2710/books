import { useState } from "react";
import axios from "axios";

export default function Form({ books, setBooks, book, setBook }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      imgUrl: "",
      description: "",
      status: "",
    }
  );

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function submitForm(event) {
    event.preventDefault();
    const API = `https://books-wh5e.onrender.com/books`;
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  async function updateBook(event) {
    event.preventDefault();
    const API = `https://books-wh5e.onrender.com/books/${books._id}`;
    await axios.put(API, formData);
    setBook(formData);
  }

  return (
    <form onSubmit={book?.title ? updateBook : submitForm}>
      <input
        name="title"
        placeholder="Book title"
        onChange={handleChange}
        value={formData.title}
      />
      <input
        name="imgUrl"
        placeholder="Image Url"
        onChange={handleChange}
        value={formData.imgUrl}
      />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={formData.description}
      />
      <input
        name="status"
        placeholder="Read?"
        onChange={handleChange}
        value={formData.status}
      />
      <button>Add book</button>
    </form>
  );
}
