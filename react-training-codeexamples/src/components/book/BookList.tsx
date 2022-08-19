import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../App";
import LoadingWrapper from "../loading-wrapper/LoadingWrapper";
import BookSlider from "../slider/BookSlider";
import BookItem from "./Book";

export interface Book {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}

interface BookListProps {}

const BookList: React.FC<BookListProps> = (props: BookListProps) => {
    const isDarkModeEnabled = useContext(DarkModeContext);
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
        <div
            style={{
                width: "50vw",
                color: isDarkModeEnabled ? "white" : "black",
            }}
        >
            <h1 style={{ marginBottom: 12 }}>Booklist</h1>
            <div style={{ marginTop: 12 }}>
                <LoadingWrapper loading={loading}>
                    {books && (
                        <>
                            <div style={{ marginTop: 2 }}>
                                <BookSlider
                                    numberOfBooks={books.length}
                                    onSliderChange={(value: number) => setSelectedNumberOfBooks(value)}
                                />
                            </div>
                            <div style={{ marginTop: 4 }}>
                                {books.slice(0, selectedNumberOfBooks).map((book, index) => (
                                    <BookItem book={book} key={index} />
                                ))}
                            </div>
                        </>
                    )}
                    {!books && (
                        <div>
                            <p style={{ marginBottom: 4 }}>Sorry, we couldn't find any books to display! 😞</p>
                        </div>
                    )}
                </LoadingWrapper>
            </div>
        </div>
    );
};

export default BookList;
