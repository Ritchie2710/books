import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Book from "./pages/Book";
import Profile from "./pages/Profile";
import LogInButton from "./components/LoginButton";
import LogOutButton from "./components/LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "./components/Welcome";

function App() {
	const [books, setBooks] = useState([]);
	const { user, isAuthenticated, isLoading } = useAuth0();

	return (
		<BrowserRouter>
			<header>
				<h1>Our Books</h1>

				{isAuthenticated ? <LogOutButton /> : <LogInButton />}

				<Link to="/"> Home</Link>
				<Link to="/about"> About</Link>
				<Link to="/profile"> Profile</Link>
			</header>

			<Routes>
				<Route path="/" element={<Home books={books} setBooks={setBooks} />} />
				<Route path="/about" element={<About />} />
				<Route path="/book/:id" element={<Book />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
