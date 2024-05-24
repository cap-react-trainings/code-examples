import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookItem from "./Book";

const testDataCheap = {
    title: "title",
    subtitle: "subtitle",
    isbn13: "isbn13",
    price: "€15.0",
    image: "image",
    url: "url",
};

const testDataExpensive = {
    title: "title",
    subtitle: "subtitle",
    isbn13: "isbn13",
    price: "€50.0",
    image: "image",
    url: "url",
};

test("shows book with cheap badge", async () => {
  render(<BookItem book={testDataCheap} />);
  const badge = await screen.findByText("cheap");
  expect(badge).toBeInTheDocument();
});

test("shows book with cheap badge", async () => {
  render(<BookItem book={testDataExpensive} />);
  const badge = await screen.findByText("expensive");
  expect(badge).toBeInTheDocument();
});
