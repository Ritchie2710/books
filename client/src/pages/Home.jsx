import BestBooks from "../components/BestBooks";

export default function Home({ books, setBooks }) {
	return (
		<main>
			<h2>Home</h2>
				<BestBooks books={books} setBooks={setBooks} />
		</main>
	);
}