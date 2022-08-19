import { Book } from "./BookList";

interface Props {
    book: Book;
}

const BookItem: React.FC<Props> = ({ book }: Props) => {
    const isCheap = parseFloat(book.price.substring(1, book.price.length)) < 30;
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
                {book.subtitle && <p>Subtitle: {book.subtitle}</p>}
                <p>Price: {book.price}</p>
                <a href={book.url} target="_blank">
                    See book in store
                </a>
            </div>
            {!isCheap ? (
                <div
                    style={{
                        backgroundColor: "#ef5350",
                        padding: "8px",
                        height: "25px",
                        marginTop: "16px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "2px",
                    }}
                >
                    <p style={{ color: "#fff", fontSize: "12px" }}>expensive</p>
                </div>
            ) : (
                <div
                    style={{
                        backgroundColor: "#66bb6a",
                        padding: "8px",
                        height: "25px",
                        marginTop: "16px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "2px",
                    }}
                >
                    <p style={{ color: "#fff", fontSize: "12px" }}>cheap</p>
                </div>
            )}
        </div>
    );
};

export default BookItem;
