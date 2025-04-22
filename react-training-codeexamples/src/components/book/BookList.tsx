import React, { useEffect, useState } from "react";
import LoadingWrapper from "../loading-wrapper/LoadingWrapper";
import BookItem from "./Book";
import CreateBook from "./CreateBook";

interface ButtonProps {
  displayNumber: number;
  onClick: (val: number) => void;
  active: boolean;
}

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

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

const BookList: React.FC = () => {
  const [selectedNumberOfBooks, setSelectedNumberOfBooks] = useState<number>();
  const displayNumbers = [0, 1, 3];
  const [loading, setLoading] = useState(true);
  const [showAddBook, setShowAddBook] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [filterText, setFilterText] = useState<string>("");

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
    setShowAddBook(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then(response => response.json())
      .then(data => {
        setBooks(data.books);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ width: "50vw" }}>
      <h1 style={{ marginBottom: 12 }}>Booklist</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "#e1f5fe",
            borderRadius: 2,
            padding: 8,
            width: "fit-content",
            fontSize: 16
          }}
          onClick={() => setShowAddBook(true)}
        >
          add book
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
        <input
          type="text"
          placeholder="Filter books by title"
          value={filterText}
          onChange={handleFilterChange}
          style={{ padding: 8, fontSize: 16 }}
        />
      </div>
      <div style={{ marginTop: 12 }}>
        {showAddBook && (
          <CreateBook onSave={addBook} onExit={() => setShowAddBook(false)} />
        )}
        {!showAddBook && (
          <LoadingWrapper loading={loading}>
            {filteredBooks.length ? (
              <>
                <div style={{ marginTop: 2 }}>
                  {displayNumbers.map((num) => (
                    <NumberButton
                      key={num}
                      displayNumber={num}
                      onClick={(val: number) => setSelectedNumberOfBooks(val)}
                      active={num === selectedNumberOfBooks}
                    />
                  ))}
                  <button
                    className="numberButton"
                    onClick={() => setSelectedNumberOfBooks(undefined)}
                  >
                    ⇠
                  </button>
                </div>
                <div style={{ marginTop: 4 }}>
                  {filteredBooks.slice(0, selectedNumberOfBooks).map((book, index) => (
                    <BookItem book={book} key={index} />
                  ))}
                </div>
              </>
            ) : (
              <div>
                <p style={{ marginBottom: 4 }}>Sorry, we couldn't find any books to display! 😞</p>
              </div>
            )}
          </LoadingWrapper>
        )}
      </div>
    </div>
  );
};

export default BookList;
