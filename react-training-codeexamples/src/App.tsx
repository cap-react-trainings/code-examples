import "./App.css";
import BookItem from "./components/book/Book";
// import { Book } from "./testData/Booklist";
import { books } from "./testData/Booklist";

/**
 * in case you would like to test the rendered ui when the booklist is empty, uncomment the comments ;)
 */

//const books: Book[] = [];

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
          {!!books.length ? (
            books.map((book, index) => (
              <BookItem book={book} key={index} inStore={index % 2 === 0} />
            ))
          ) : (
            <p>no books available 😢 </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
