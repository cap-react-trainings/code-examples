import { render, screen } from "@testing-library/react";
import BookItem from "./Book";
import { MemoryRouter } from "react-router-dom";

const testDataCheap = {
  title: "title",
  subtitle: "subtitle",
  isbn13: "isbn13",
  price: "€15.0",
  image: "image",
  url: "url"
};

const testDataExpensive = {
  title: "title",
  subtitle: "subtitle",
  isbn13: "isbn13",
  price: "€50.0",
  image: "image",
  url: "url"
};

test("shows book with cheap badge", async () => {
  /**
   * In der Testumgebung JSDOM exisitiert kein react-router-dom.
   * Daher werden Komponente oder Hooks von react-router-dom nicht erkannt.
   */
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
