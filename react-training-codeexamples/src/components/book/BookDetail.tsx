import { LoaderFunctionArgs, useLoaderData,useRouteError } from "react-router-dom";

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

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const bookLoader = async ({ params }: LoaderFunctionArgs) => {
  // request künstlich verlangsamen, sodass loading spinner angezeigt wird
  await delay(2000);

  const res = await fetch("https://api.itbook.store/1.0/books/" + params.id);
  if (!res.ok) {
    throw new Error("Book not found");
  }
  const book = (await res.json()) as BookDetails;
  return { book };
};

export const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <div>Error occurred!!</div>;
};

const BookDetail = () => {
  const { book } = useLoaderData<typeof bookLoader>();

  return (
    <>
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
    </>
  );
};

export default BookDetail;
