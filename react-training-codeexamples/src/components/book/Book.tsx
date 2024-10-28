import { Box, Typography } from "@mui/material";
import { Book } from "../../testData/Booklist";
import { FunctionComponent } from "react";

interface Props {
  book: Book;
}

const BookItem: FunctionComponent<Props> = ({ book }: Props) => {
  /**
   * styling can be ignored for the moment, will be covered later on
   */
  return (
    <Box
      sx={{
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          m: "1rem",
        }}
      >
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="body1">Author: {book.author}</Typography>
        <Typography variant="caption" sx={{ mb: 2, color: "#757575" }}>
          release date: {book.releaseDate}
        </Typography>
      </Box>
      {!book.inStore && (
        <Box
          sx={{
            bgcolor: "#ef5350",
            p: 2,
            height: 5,
            mt: 2,
            display: "flex",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: "#fff" }}>
            currently not available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BookItem;
