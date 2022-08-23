import { useState } from "react";
import "./App.css";
import BookItem from "./components/book/Book";
import BookSlider from "./components/slider/BookSlider";
import { books } from "./testData/Booklist";

function App() {
  const [selectedNumberOfBooks, setSelectedNumberOfBooks] = useState(
    Math.round(books.length / 2)
  );
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50vw" }}>
          <h1 style={{ marginBottom: 12 }}>Booklist</h1>
          <div style={{ marginTop: 12 }}>
            <BookSlider
              numberOfBooks={books.length}
              onSliderChange={(value: number) =>
                setSelectedNumberOfBooks(value)
              }
            />
          </div>
          {!!books.length ? (
            books
              .slice(0, selectedNumberOfBooks)
              .map((book, index) => (
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
