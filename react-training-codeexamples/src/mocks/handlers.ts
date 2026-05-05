import { http, HttpResponse } from 'msw';

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

// Mock data for IT Book Store API
const mockBooks: Book[] = [
  {
    title: "Learning React",
    subtitle: "A Hands-On Guide to Building Web Applications Using React and Redux", 
    isbn13: "9781491954621",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781491954621.png",
    url: "https://itbook.store/books/9781491954621"
  },
  {
    title: "React: Up & Running",
    subtitle: "Building Web Applications",
    isbn13: "9781491931820",
    price: "$24.99", 
    image: "https://itbook.store/img/books/9781491931820.png",
    url: "https://itbook.store/books/9781491931820"
  },
  {
    title: "Pro React 16",
    subtitle: "",
    isbn13: "9781484244500",
    price: "$34.99",
    image: "https://itbook.store/img/books/9781484244500.png",
    url: "https://itbook.store/books/9781484244500"
  },
  {
    title: "React Quickly",
    subtitle: "Painless web apps with React, JSX, Redux, and GraphQL",
    isbn13: "9781617293344", 
    price: "$31.99",
    image: "https://itbook.store/img/books/9781617293344.png",
    url: "https://itbook.store/books/9781617293344"
  },
  {
    title: "Fullstack React",
    subtitle: "The Complete Guide to ReactJS and Friends",
    isbn13: "9780991344628",
    price: "$39.00",
    image: "https://itbook.store/img/books/9780991344628.png", 
    url: "https://itbook.store/books/9780991344628"
  }
];

export const handlers = [
  // Mock GET https://api.itbook.store/1.0/new
  http.get('https://api.itbook.store/1.0/new', () => {
    return HttpResponse.json({
      error: "0",
      total: mockBooks.length.toString(),
      books: mockBooks
    });
  }),

  // Mock GET https://api.itbook.store/1.0/books/{isbn13}
  http.get('https://api.itbook.store/1.0/books/:isbn13', ({ params }: { params: { isbn13: string } }) => {
    const { isbn13 } = params;
    const book = mockBooks.find(b => b.isbn13 === isbn13);
    
    if (!book) {
      return HttpResponse.json({
        error: "1", 
        message: "Book not found"
      }, { status: 404 });
    }

    // Return detailed book information
    return HttpResponse.json({
      error: "0",
      title: book.title,
      subtitle: book.subtitle,
      isbn13: book.isbn13,
      price: book.price,
      image: book.image,
      url: book.url,
      authors: "Alex Banks, Eve Porcello",
      publisher: "O'Reilly Media",
      language: "English",
      isbn10: "1491954620",
      pages: "350",
      year: "2017",
      rating: "4",
      desc: "If you want to learn how to build efficient user interfaces with React, this is your book.",
      pdf: {}
    });
  })
];