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
          {!!books.length ? (
            books.map((book, index) => <BookItem book={book} key={index} />)
          ) : (
            <Typography variant="body1">no books available 😢 </Typography>
          )}
        </div>
      </Box>
    </div>
  );
}

export default App;
