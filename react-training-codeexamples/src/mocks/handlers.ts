import { http, HttpResponse } from 'msw';
import { Book } from '../components/book/BookList';

// Interface for book detail response
interface BookDetail {
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

// Mock data that matches your Book interface
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

// Detailed mock data for book details
const mockBookDetails: Record<string, BookDetail> = {
  "9781491954621": {
    error: "0",
    title: "Learning React",
    subtitle: "A Hands-On Guide to Building Web Applications Using React and Redux",
    authors: "Alex Banks, Eve Porcello",
    publisher: "O'Reilly Media",
    language: "English",
    isbn10: "1491954620",
    isbn13: "9781491954621",
    pages: "350",
    year: "2017",
    rating: "4",
    desc: "If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads.",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781491954621.png",
    url: "https://itbook.store/books/9781491954621"
  },
  "9781491931820": {
    error: "0",
    title: "React: Up & Running",
    subtitle: "Building Web Applications",
    authors: "Stoyan Stefanov",
    publisher: "O'Reilly Media",
    language: "English",
    isbn10: "1491931825",
    isbn13: "9781491931820",
    pages: "222",
    year: "2016",
    rating: "4",
    desc: "Hit the ground running with React, the open-source technology from Facebook for building rich web applications fast. With this practical guide, you'll quickly move from basic examples to more complex components and applications.",
    price: "$24.99",
    image: "https://itbook.store/img/books/9781491931820.png",
    url: "https://itbook.store/books/9781491931820"
  },
  "9781484244500": {
    error: "0",
    title: "Pro React 16",
    subtitle: "",
    authors: "Adam Freeman",
    publisher: "Apress",
    language: "English",
    isbn10: "1484244508",
    isbn13: "9781484244500",
    pages: "745",
    year: "2019",
    rating: "4",
    desc: "Use the enormously popular React framework to build dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices. You will learn how React brings the power of strong architecture and responsive data to the client, providing the foundation for complex and rich user interfaces.",
    price: "$34.99",
    image: "https://itbook.store/img/books/9781484244500.png",
    url: "https://itbook.store/books/9781484244500"
  },
  "9781617293344": {
    error: "0",
    title: "React Quickly",
    subtitle: "Painless web apps with React, JSX, Redux, and GraphQL",
    authors: "Azat Mardan",
    publisher: "Manning Publications",
    language: "English",
    isbn10: "1617293342",
    isbn13: "9781617293344",
    pages: "528",
    year: "2017",
    rating: "4",
    desc: "React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book.",
    price: "$31.99",
    image: "https://itbook.store/img/books/9781617293344.png",
    url: "https://itbook.store/books/9781617293344"
  },
  "9780991344628": {
    error: "0",
    title: "Fullstack React",
    subtitle: "The Complete Guide to ReactJS and Friends",
    authors: "Anthony Accomazzo, Nathaniel Murray, Ari Lerner, Clay Allsopp, David Guttman, Tyler McGinnis",
    publisher: "Fullstack.io",
    language: "English",
    isbn10: "0991344626",
    isbn13: "9780991344628",
    pages: "836",
    year: "2017",
    rating: "5",
    desc: "Fullstack React is a complete guide to ReactJS and friends. Inside you'll learn to build production ready apps with React and other cutting-edge technologies like GraphQL, Jest, and more.",
    price: "$39.00",
    image: "https://itbook.store/img/books/9780991344628.png",
    url: "https://itbook.store/books/9780991344628"
  }
};

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
    const bookDetail = mockBookDetails[isbn13];
    
    if (!bookDetail) {
      return HttpResponse.json({
        error: "1",
        title: "",
        subtitle: "",
        authors: "",
        publisher: "",
        language: "",
        isbn10: "",
        isbn13: "",
        pages: "",
        year: "",
        rating: "",
        desc: "Book not found",
        price: "",
        image: "",
        url: ""
      }, { status: 404 });
    }

    // Return detailed book information
    return HttpResponse.json(bookDetail);
  })
];