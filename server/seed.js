const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.MONGO_URL);

async function seed() {
  await Book.create([
    {
      title: "To Kill a Mockingbird",
      description:
        "A classic novel by Harper Lee about racial injustice and moral growth in the American South during the 1930s.",
      status: "read",
    },
    {
      title: "1984",
      description:
        "George Orwell's dystopian novel depicting a totalitarian regime and the power of state control over individuals.",
      status: "read",
    },
    {
      title: "Pride and Prejudice",
      description:
        "Jane Austen's novel of manners, love, and marriage in early 19th-century England.",
      status: "unread",
    },
    {
      title: "The Great Gatsby",
      description:
        "F. Scott Fitzgerald's exploration of the American Dream and decadence in the 1920s.",
      status: "read",
    },
    {
      title: "Moby-Dick",
      description:
        "Herman Melville's epic tale of Captain Ahab's obsessive pursuit of the white whale, Moby-Dick.",
      status: "read",
    },
    {
      title: "War and Peace",
      description:
        "Leo Tolstoy's historical novel set against the backdrop of the Napoleonic Wars and Russian aristocracy.",
      status: "read",
    },
    {
      title: "The Lord of the Rings",
      description:
        "J.R.R. Tolkien's high fantasy epic, following the quest to destroy the One Ring and save Middle-earth.",
      status: "unread",
    },
    {
      title: "To the Lighthouse",
      description:
        "Virginia Woolf's modernist novel exploring the inner thoughts and experiences of its characters.",
      status: "read",
    },
    {
      title: "The Catcher in the Rye",
      description:
        "J.D. Salinger's novel following the experiences of a teenager, Holden Caulfield, in New York City.",
      status: "read",
    },
    {
      title: "The Odyssey",
      description:
        "Homer's ancient Greek epic poem detailing the adventures of Odysseus on his journey home from the Trojan War.",
      status: "read",
    },
    {
      title: "One Hundred Years of Solitude",
      description:
        "Gabriel García Márquez's magical realist masterpiece chronicling the Buendía family in the fictional town of Macondo.",
      status: "read",
    },
    {
      title: "The Brothers Karamazov",
      description:
        "Fyodor Dostoevsky's philosophical novel exploring the moral and spiritual dilemmas of the Karamazov brothers.",
      status: "read",
    },
    {
      title: "The Hobbit",
      description:
        "J.R.R. Tolkien's fantasy adventure novel following the journey of Bilbo Baggins.",
      status: "read",
    },
    {
      title: "Jane Eyre",
      description:
        "Charlotte Brontë's novel of an orphaned girl's journey to self-discovery and love in Victorian England.",
      status: "unread",
    },
    {
      title: "Brave New World",
      description:
        "Aldous Huxley's dystopian novel depicting a future society controlled through pleasure and genetic engineering.",
      status: "read",
    },
    {
      title: "The Alchemist",
      description:
        "Paulo Coelho's novel of a shepherd's journey to find his Personal Legend and fulfill his dreams.",
      status: "read",
    },
    {
      title: "Crime and Punishment",
      description:
        "Fyodor Dostoevsky's psychological novel exploring the moral and psychological struggles of Raskolnikov.",
      status: "read",
    },
    {
      title: "Wuthering Heights",
      description:
        "Emily Brontë's novel of love, revenge, and the haunting atmosphere of the Yorkshire moors.",
      status: "read",
    },
    {
      title: "The Picture of Dorian Gray",
      description:
        "Oscar Wilde's novel exploring the consequences of a life of hedonism and aestheticism.",
      status: "read",
    },
    {
      title: "The Grapes of Wrath",
      description:
        "John Steinbeck's novel depicting the struggles of the Joad family during the Great Depression.",
      status: "read",
    },
    {
      title: "Molly Moon's Incredible Book of Hypnotism",
      description:
        "Georgia Byng's novel about a young orphan who discovers a book of hypnotism and uses its powers to change her life.",
      status: "unread",
    },
    {
      title: "Band of Brothers",
      description:
        "Stephen E. Ambrose's historical account of Easy Company, part of the 506th Parachute Infantry Regiment, 101st Airborne Division, during World War II.",
      status: "read",
    },
    {
      title: "The Day of the Jackal",
      description:
        "Frederick Forsyth's thriller novel about an assassin hired to kill Charles de Gaulle and the efforts to stop him.",
      status: "unread",
    },
  ]);

  console.log("Book created.");
  mongoose.disconnect();
}

seed();
