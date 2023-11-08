import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Book() {

const params = useParams()
const [books, setBooks] = useState([]);

useEffect(() => {getBook()},[])

async function getBook (){
  const API = `http://localhost:8080/books?_id=${params.id}`

  const res = await axios.get(API)
  setBooks(res.data[0])
}

	return (
		<>
    <h2>{books.title}</h2>
    <img src={books.imgUrl} />
    <p>{books.description}</p>
    <p>{books.status}</p>
			<Form />
		</>
	);
}
