import { useEffect, useState } from "react";
import "./App.css";
import BookItem from "./components/book/Book";
import LoadingWrapper from "./components/loading-wrapper/LoadingWrapper";
import BookSlider from "./components/slider/BookSlider";

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>();
  const [selectedNumberOfBooks, setSelectedNumberOfBooks] = useState<number>();
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
            <LoadingWrapper loading={loading}>
              {books && (
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
                    {books
                      .slice(0, selectedNumberOfBooks)
                      .map((book, index) => (
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
      </div>
    </div>
  );
}

export default App;
