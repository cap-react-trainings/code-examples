export interface BookData {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export const books: BookData[] = [
  {
    title: "Deno Succinctly",
    subtitle: "this is a subtitle",
    isbn13: "9781642002140",
    price: "$0.00",
    image: "https://itbook.store/img/books/9781642002140.png",
    url: "https://itbook.store/books/9781642002140",
  },
  {
    title: "Robotics, AI, and Humanity",
    subtitle: "Science, Ethics, and Policy",
    isbn13: "9783030541729",
    price: "$59.99",
    image: "https://itbook.store/img/books/9783030541729.png",
    url: "https://itbook.store/books/9783030541729",
  },
  {
    title: "Introduction to Autonomous Robots, 3rd Edition",
    subtitle: "this is another subtitle",
    isbn13: "9781493773077",
    price: "$20.99",
    image: "https://itbook.store/img/books/9781493773077.png",
    url: "https://itbook.store/books/9781493773077",
  },
];
