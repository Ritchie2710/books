const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.MONGO_URL);

async function seed() {
  await Book.create([
    {
      title: "To Kill a Mockingbird",
      imgUrl:"https://epqkkxb65h3.exactdn.com/wp-content/uploads/2023/02/m-2908.jpg?strip=all&lossy=1&ssl=1",
      description:
        "A classic novel by Harper Lee about racial injustice and moral growth in the American South during the 1930s.",
      status: "Read",
    },
    {
      title: "1984",
      imgUrl: "https://www.whsmith.co.uk/mobify/caching/assets/product-image/extra-large/9780141036144-10-000_1.jpg",
      description:
        "George Orwell's dystopian novel depicting a totalitarian regime and the power of state control over individuals.",
      status: "Read",
    },
    {
      title: "Pride and Prejudice",
      imgUrl:"https://cdn.kobo.com/book-images/afcd8653-3b27-4423-bee9-570fb1441aed/353/569/90/False/pride-and-prejudice-71.jpg",
      description:
        "Jane Austen's novel of manners, love, and marriage in early 19th-century England.",
      status: "Unread",
    },
    {
      title: "The Great Gatsby",
      imgUrl:"https://images.squarespace-cdn.com/content/v1/56e36f751d07c0743d1e142f/1470787828027-SZ1GG7UVQXOS4Y5S2KKF/The+Great+Gatsby+by+F.+Scott+Fitzgerald?format=2500w",
      description:
        "F. Scott Fitzgerald's exploration of the American Dream and decadence in the 1920s.",
      status: "Read",
    },
    {
      title: "Moby-Dick",
      imgUrl:"https://m.media-amazon.com/images/I/51aV053NRjL._SY445_SX342_.jpg",
      description:
        "Herman Melville's epic tale of Captain Ahab's obsessive pursuit of the white whale, Moby-Dick.",
      status: "Read",
    },
    {
      title: "War and Peace",
      imgUrl: "blob:https://www.kobo.com/1108baba-9651-4022-8b6c-9bc628e73e5e",
      description:
        "Leo Tolstoy's historical novel set against the backdrop of the Napoleonic Wars and Russian aristocracy.",
      status: "Read",
    },
    {
      title: "The Lord of the Rings",
      imgUrl:"https://m.media-amazon.com/images/I/81nV6x2ey4L._SY522_.jpg",
      description:
        "J.R.R. Tolkien's high fantasy epic, following the quest to destroy the One Ring and save Middle-earth.",
      status: "Unread",
    },
    {
      title: "To the Lighthouse",
      imgUrl:"https://almabooks.com/wp-content/uploads/2017/03/9781847496577.jpg",
      description:
        "Virginia Woolf's modernist novel exploring the inner thoughts and experiences of its characters.",
      status: "Unread",
    },
    {
      title: "The Catcher in the Rye",
      imgUrl:"https://static.toiimg.com/thumb/msid-103577634,imgsize-39508,width-400,resizemode-4/103577634.jpg",
      description:
        "J.D. Salinger's novel following the experiences of a teenager, Holden Caulfield, in New York City.",
      status: "Read",
    },
    {
      title: "The Odyssey",
      imgUrl:"https://cdn.kobo.com/book-images/1c003baf-c48d-45be-9fd3-bc9c2bc6a685/353/569/90/False/the-odyssey-172.jpg",
      description:
        "Homer's ancient Greek epic poem detailing the adventures of Odysseus on his journey home from the Trojan War.",
      status: "Read",
    },
    {
      title: "One Hundred Years of Solitude",
      imgUrl:"https://b1480254.smushcdn.com/1480254/wp-content/uploads/2021/09/Garcia-Marquez-G.png?lossy=1&strip=1&webp=1",
      description:
        "Gabriel García Márquez's magical realist masterpiece chronicling the Buendía family in the fictional town of Macondo.",
      status: "Read",
    },
    {
      title: "The Brothers Karamazov",
      imgUrl:"https://cdn.kobo.com/book-images/1208ebc8-3b5d-40ef-ba2d-b5121520d7e2/353/569/90/False/the-brothers-karamazov-135.jpg",
      description:
        "Fyodor Dostoevsky's philosophical novel exploring the moral and spiritual dilemmas of the Karamazov brothers.",
      status: "Read",
    },
    {
      title: "The Hobbit",
      imgUrl:"https://www.hachette.co.uk/wp-content/uploads/2019/05/hbg-title-9780753733783-67.jpg?w=443",
      description:
        "J.R.R. Tolkien's fantasy adventure novel following the journey of Bilbo Baggins.",
      status: "Read",
    },
    {
      title: "Jane Eyre",
      imgUrl:"https://cdn.kobo.com/book-images/3fa794c2-7ac9-409f-b308-0229dd2ce3f8/353/569/90/False/jane-eyre-601.jpg",
      description:
        "Charlotte Brontë's novel of an orphaned girl's journey to self-discovery and love in Victorian England.",
      status: "Rnread",
    },
    {
      title: "Brave New World",
      imgUrl:"https://m.media-amazon.com/images/I/51Di-GJnvfL.jpg",
      description:
        "Aldous Huxley's dystopian novel depicting a future society controlled through pleasure and genetic engineering.",
      status: "Read",
    },
    {
      title: "The Alchemist",
      imgUrl:"https://m.media-amazon.com/images/I/81ioPZFMeUL._SY522_.jpg",
      description:
        "Paulo Coelho's novel of a shepherd's journey to find his Personal Legend and fulfill his dreams.",
      status: "Read",
    },
    {
      title: "Crime and Punishment",
      imgUrl:"https://cdn.kobo.com/book-images/fd843459-3520-49f9-a18e-907940466cf7/353/569/90/False/crime-and-punishment-270.jpg",
      description:
        "Fyodor Dostoevsky's psychological novel exploring the moral and psychological struggles of Raskolnikov.",
      status: "Read",
    },
    {
      title: "Wuthering Heights",
      imgUrl: "https://cdn.foyles.co.uk/bookjackets/large/9780/1411/9780141199085.jpg",
      description:
        "Emily Brontë's novel of love, revenge, and the haunting atmosphere of the Yorkshire moors.",
      status: "Read",
    },
    {
      title: "The Picture of Dorian Gray",
      imgUrl:"https://almabooks.com/wp-content/uploads/2016/10/9781847493729.jpg",
      description:
        "Oscar Wilde's novel exploring the consequences of a life of hedonism and aestheticism.",
      status: "Read",
    },
    {
      title: "The Grapes of Wrath",
      imgUrl:"https://m.media-amazon.com/images/I/51gTpxfBbjL._SY445_SX342_.jpg",
      description:
        "John Steinbeck's novel depicting the struggles of the Joad family during the Great Depression.",
      status: "Read",
    },
    {
      title: "Molly Moon's Incredible Book of Hypnotism",
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/1/16/Molly_moon_hypnotism.jpg",
      description:
        "Georgia Byng's novel about a young orphan who discovers a book of hypnotism and uses its powers to change her life.",
      status: "Unread",
    },
    {
      title: "Band of Brothers",
      imgUrl:"https://m.media-amazon.com/images/I/41LzNDoglwL._SY445_SX342_.jpg",
      description:
        "Stephen E. Ambrose's historical account of Easy Company, part of the 506th Parachute Infantry Regiment, 101st Airborne Division, during World War II.",
      status: "Read",
    },
    {
      title: "The Day of the Jackal",
      imgUrl:"https://m.media-amazon.com/images/I/61ZLLoxHniS._SY522_.jpg",
      description:
        "Frederick Forsyth's thriller novel about an assassin hired to kill Charles de Gaulle and the efforts to stop him.",
      status: "Unread",
    },
  ]);

  console.log("Book created.");
  mongoose.disconnect();
}

seed();
