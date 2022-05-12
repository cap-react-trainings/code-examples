import { Box, Typography } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: 750,
          m: "0 auto",
        }}
      >
        <Typography variant="h2" sx={{ mb: 4 }}>
          Booklist
        </Typography>
        <LoadingWrapper loading={loading}>
          {books && (
            <>
              <Box sx={{ mt: 2 }}>
                <BookSlider
                  numberOfBooks={books.length}
                  onSliderChange={(value: number) =>
                    setSelectedNumberOfBooks(value)
                  }
                />
              </Box>
              <Box sx={{ mt: 4 }}>
                {books.slice(0, selectedNumberOfBooks).map((book, index) => (
                  <BookItem book={book} key={index} />
                ))}
              </Box>
            </>
          )}
          {!books && (
            <Box>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Sorry, we couldn't find any books to display! 😞
              </Typography>
            </Box>
          )}
        </LoadingWrapper>
      </Box>
    </div>
  );
}

export default App;
