export interface Book {
  id: number;
  title: string;
  author: string;
  releaseDate: string;
  inStore: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Moby Dick",
    author: "Herman Melville",
    releaseDate: "1851",
    inStore: true,
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    releaseDate: "1925",
    inStore: false,
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    releaseDate: "1937",
    inStore: true,
  },
  {
    id: 4,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    releaseDate: "1997",
    inStore: true,
  },
];
