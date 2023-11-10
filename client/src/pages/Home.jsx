import BestBooks from "../components/BestBooks";
import Form from "../components/Form";
import Welcome from "../components/Welcome";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home({ books, setBooks }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <section>
        {isAuthenticated ? (
          <Form books={books} setBooks={setBooks} />
        ) : (
          <h2>To add and update books, please log in.</h2>
        )}
      </section>
      <main>
        {isAuthenticated ? (
          <BestBooks books={books} setBooks={setBooks} />
        ) : (
          <Welcome />
        )}
      </main>
    </>
  );
}
