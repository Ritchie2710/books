import {useState} from 'react'
import axios from 'axios'

export default function Form({books, setBooks}) {
const [formData, setFormData] = useState ({
  title: "",
  description: "",
  status: ""
})

function handleChange (event){
  setFormData ({...formData, [event.target.name]: event.target.value 
  })
}

async function submitForm (event){
  event.preventDefault()
  const API = `http://localhost:8080/books`;
  // const API = `https://books-wh5e.onrender.com/books`;
  const res = await axios.post(API, formData)
  setBooks([...books, res.data])
}

  return (
      <form onSubmit={submitForm}>
        <input name="title" placeholder='Book title' onChange={handleChange}/>
        <input name="description" placeholder='Description'onChange={handleChange}/>
        <input name="status" placeholder='Read?'onChange={handleChange}/>
        <button>Add book</button>
      </form>
  )
}
