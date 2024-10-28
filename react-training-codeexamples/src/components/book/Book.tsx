import { FunctionComponent } from "react";
import { BookData } from "../../testData/books";

interface Props {
  book: BookData;
}

const BookItem: FunctionComponent<Props> = ({ book }: Props) => {
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
        <p>Subtitle: {book.subtitle}</p>
        <p style={{ marginBottom: 2, color: "#757575", fontSize: "12px" }}>
          price: {book.price}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
