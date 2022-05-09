import "./App.css";
import BookItem from "./components/book/Book";
import { books } from "./testData/Booklist";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>Booklist</h1>
          {books.map((book, index) => (
            <BookItem book={book} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
