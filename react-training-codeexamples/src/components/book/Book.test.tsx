import { render, screen } from "@testing-library/react";
import BookItem from "./Book";
import { expect, test } from "vitest";
import { Book } from "./BookList";
import { MemoryRouter } from "react-router-dom";

const testDataCheap: Book = {
  title: "title",
  subtitle: "subtitle",
  isbn13: "isbn13",
  price: "€15.0",
  image: "image",
  url: "url"
};

const testDataExpensive: Book = {
  title: "title",
  subtitle: "subtitle",
  isbn13: "isbn13",
  price: "€50.0",
  image: "image",
  url: "url"
};

test("shows book with cheap badge", async () => {
  render(
    <MemoryRouter>
      <BookItem book={testDataCheap} />
    </MemoryRouter>
  );
  const badge = await screen.findByText("cheap");
  expect(badge).toBeInTheDocument();
});

test("shows book with cheap badge", async () => {
  render(
    <MemoryRouter>
      <BookItem book={testDataExpensive} />
    </MemoryRouter>
  );
  const badge = await screen.findByText("expensive");
  expect(badge).toBeInTheDocument();
});
