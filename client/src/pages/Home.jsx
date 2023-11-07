import BestBooks from "../components/BestBooks";
import Form from "../components/Form"

export default function Home({ books, setBooks }) {
	return (
		<main>
			<h2>Home</h2>
				<BestBooks books={books} setBooks={setBooks}/>
				<Form books={books} setBooks={setBooks}/>
		</main>
	);
}