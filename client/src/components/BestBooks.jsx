export default function BestBooks({ books, setBooks }) {
  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return <></>;
}
