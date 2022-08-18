import { Book } from "../../testData/books";

interface Props {
  book: Book;
}

const BookItem: React.FC<Props> = ({ book }: Props) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "1rem",
        }}
      >
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p style={{ marginBottom: 2, color: "#757575", fontSize: "12px" }}>
          release date: {book.releaseDate}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
