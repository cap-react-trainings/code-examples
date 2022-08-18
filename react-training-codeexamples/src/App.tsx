import "./App.css";
import Book from "./components/book/Book";
import { bookExamples } from "./testData/books";

function App() {
  return (
    <div className="App">
      <h1>Booklist</h1>
      {bookExamples.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
}

export default App;
