import { http, HttpResponse } from 'msw';
import { Book } from '../components/book/BookList';

// Mock data matching our Book interface
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
  // Intercept "GET https://api.itbook.store/1.0/new" requests
  http.get('https://api.itbook.store/1.0/new', () => {
    return HttpResponse.json({
      error: "0",
      total: mockBooks.length.toString(),
      books: mockBooks
    });
  }),
];