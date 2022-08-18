import { Book } from "../../testData/Booklist";

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
      {!book.inStore && (
        <div
          style={{
            backgroundColor: "#ef5350",
            padding: "8px",
            height: "25px",
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <p style={{ color: "#fff", fontSize: "12px" }}>
            currently not available
          </p>
        </div>
      )}
    </div>
  );
};

export default BookItem;
