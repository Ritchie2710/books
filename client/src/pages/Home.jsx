import BestBooks from "../components/BestBooks";
import Form from "../components/Form"

export default function Home({ books, setBooks }) {
	return (
		<>
		<section>
			<Form books={books} setBooks={setBooks}/>
			</section>
		<main>
				<BestBooks books={books} setBooks={setBooks}/>
		</main>
		</>
	);
}