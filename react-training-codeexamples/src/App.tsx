import { Box, Typography } from "@mui/material";
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
        <Box sx={{ mt: 2 }}>
          <BookSlider
            numberOfBooks={books.length}
            onSliderChange={(value: number) => setSelectedNumberOfBooks(value)}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          {books.slice(0, selectedNumberOfBooks).map((book, index) => (
            <BookItem book={book} key={index} />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default App;
