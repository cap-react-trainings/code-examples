import { FunctionComponent } from "react";
import { BookData } from "../../testData/Booklist";

interface Props {
  book: BookData;
  inStore: boolean;
}

const BookItem: FunctionComponent<Props> = ({ book, inStore }: Props) => {
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
      {!inStore && (
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
