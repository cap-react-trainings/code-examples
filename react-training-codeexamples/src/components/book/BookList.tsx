import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../App";
import LoadingWrapper from "../loading-wrapper/LoadingWrapper";
import BookItem from "./Book";

interface ButtonProps {
  displayNumber: number;
  onClick: (val: number) => void;
  active: boolean;
}

const NumberButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`numberButton ${props.active ? "active" : ""}`}
      onClick={() => props.onClick(props.displayNumber)}
    >
      {props.displayNumber}
    </button>
  );
};

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

const BookList: FunctionComponent = () => {
  const { isDarkModeEnabled, toggleDarkMode } = useContext(DarkModeContext);
  const [books, setBooks] = useState<Book[]>();
  const [selectedNumberOfBooks, setSelectedNumberOfBooks] = useState<number>();
  const displayNumbers = [0, 1, 3];
  const [loading, setLoading] = useState(true);

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
    <div
      style={{
        width: "50vw",
        color: isDarkModeEnabled ? "white" : "black",
      }}
    >
      <h1 style={{ marginBottom: 12 }}>Booklist</h1>
      <button onClick={() => toggleDarkMode()}>Switch Mode</button>
      <div style={{ marginTop: 12 }}>
        <LoadingWrapper loading={loading}>
          {books && (
            <>
              <div style={{ marginTop: 2 }}>
                {displayNumbers.map((num) => (
                  <NumberButton
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
                {books.slice(0, selectedNumberOfBooks).map((book, index) => (
                  <BookItem book={book} key={index} />
                ))}
              </div>
            </>
          )}
          {!books && (
            <div>
              <p style={{ marginBottom: 4 }}>
                Sorry, we couldn't find any books to display! 😞
              </p>
            </div>
          )}
        </LoadingWrapper>
      </div>
    </div>
  );
};

export default BookList;
