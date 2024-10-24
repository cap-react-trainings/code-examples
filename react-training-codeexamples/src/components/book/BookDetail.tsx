import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useRouteError } from "react-router-dom";
import LoadingWrapper from "../loading-wrapper/LoadingWrapper";

export interface BookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
}

export const loader = ({ params }) => {
  return fetch("https://api.itbook.store/1.0/books/" + params.id);
};

export const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <div>Error occurred!!</div>;
};

const BookDetail = () => {
  const [book, setBook] = useState<BookDetails>();
  const [loading, setLoading] = useState(true);
  const loaderData = useLoaderData();

  useEffect(() => {
    setBook(loaderData);
    setLoading(false);
  }, [loaderData]);

  return (
    <LoadingWrapper loading={loading}>
      {book && (
        <div style={{ margin: 10 }}>
          <h1>{book?.title}</h1>
          <div style={{ display: "flex" }}>
            <img src={book?.image} alt={book?.title} style={{ width: 200, height: 300 }} />
            <div style={{ marginLeft: 10, textAlign: "left" }}>
              <p>Authors: {book.authors}</p>
              <p>Language: {book.language}</p>
              <p>Pages: {book.pages}</p>
              <p>Year: {book.year}</p>
              <p>Rating: {book.rating}</p>
              <p>Price: {book.price}</p>
              <p>ISBN13: {book.isbn13}</p>
              <p>Publisher: {book.publisher}</p>
              <p>{book.desc}</p>
            </div>
          </div>
        </div>
      )}
    </LoadingWrapper>
  );
};

export default BookDetail;
