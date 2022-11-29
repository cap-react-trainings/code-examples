import { useState } from "react";
import "./App.css";
import BookItem from "./components/book/Book";
import { books } from "./testData/Booklist";

interface ButtonProps {
  displayNumber: number;
  onClick: (val: number) => void;
  active: boolean;
}

const NumberButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`numberButton ${props.active ? "active" : ""}`}
      onClick={() => props.onClick(props.displayNumber)}
    >
      {props.displayNumber}
    </button>
  );
};

function App() {
  const [selectedNumberOfBooks, setSelectedNumberOfBooks] = useState(3);
  const displayNumbers = [0, 1, 3];
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
            {displayNumbers.map((num) => (
              <NumberButton
                displayNumber={num}
                onClick={(val: number) => setSelectedNumberOfBooks(val)}
                active={num === selectedNumberOfBooks}
              />
            ))}
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
