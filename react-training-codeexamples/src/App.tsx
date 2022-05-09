import { Box, Typography } from "@mui/material";
import "./App.css";
import BookItem from "./components/book/Book";
import { books } from "./testData/Booklist";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Typography variant="h2">Booklist</Typography>
          {books.map((book, index) => (
            <BookItem book={book} key={index} />
          ))}
        </div>
      </Box>
    </div>
  );
}

export default App;
