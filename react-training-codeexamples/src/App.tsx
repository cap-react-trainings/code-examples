import "./App.css";
import Book from "./components/book/Book";
import { books } from "./testData/books";

function App() {
  return (
    <div className="App" style={{ margin: "0 auto", width: "50vw" }}>
      <h1>Booklist</h1>
      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
}

export default App;
