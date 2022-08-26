import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingWrapper from "../loading-wrapper/LoadingWrapper";
import BookSlider from "../slider/BookSlider";
import BookItem from "./Book";
import CreateBook from "./CreateBook";

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

const BookList: React.FC = () => {
  const [selectedNumberOfBooks, setSelectedNumberOfBooks] = useState<number>();
  const [loading, setLoading] = useState(true);
  const [showAddBook, setShowAddBook] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const addBook = (newBook: Book) => {
    setBooks([...books, newBook]);
    setShowAddBook(false);
  };

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books);
      })
      .catch((error) => console.error(error))
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
            fontSize: 16,
          }}
          onClick={() => setShowAddBook(true)}
        >
          add book
        </button>
      </div>
      <div style={{ marginTop: 12 }}>
        {showAddBook && <CreateBook onSave={addBook} />}
        {!showAddBook && (
          <LoadingWrapper loading={loading}>
            {books?.length && (
              <>
                <div style={{ marginTop: 2 }}>
                  <BookSlider
                    numberOfBooks={books.length}
                    onSliderChange={(value: number) =>
                      setSelectedNumberOfBooks(value)
                    }
                  />
                </div>
                <div style={{ marginTop: 4 }}>
                  {books.slice(0, selectedNumberOfBooks).map((book, index) => (
                    <BookItem book={book} key={index} />
                  ))}
                </div>
              </>
            )}
            {!books.length && (
              <div>
                <p style={{ marginBottom: 4 }}>
                  Sorry, we couldn't find any books to display! 😞
                </p>
              </div>
            )}
          </LoadingWrapper>
        )}
      </div>
    </div>
  );
};

export default BookList;
