import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookList from "./BookList";
//Required for MSW
//import "../../setupTests";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          books: [
            {
              "title": "An Introduction to C & GUI Programming, 2nd Edition",
              "subtitle": "",
              "isbn13": "9781912047451",
              "price": "$12.94",
              "image": "https://itbook.store/img/books/9781912047451.png",
              "url": "https://itbook.store/books/9781912047451"
            },
            {
              "title": "Snowflake: The Definitive Guide",
              "subtitle": "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
              "isbn13": "9781098103828",
              "price": "$58.90",
              "image": "https://itbook.store/img/books/9781098103828.png",
              "url": "https://itbook.store/books/9781098103828"
            },
            {
              "title": "Python for Data Analysis, 3rd Edition",
              "subtitle": "Data Wrangling with pandas, NumPy, and Jupyter",
              "isbn13": "9781098104030",
              "price": "$34.96",
              "image": "https://itbook.store/img/books/9781098104030.png",
              "url": "https://itbook.store/books/9781098104030"
            }
          ]
        })
    } as Response)
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("Shows CreateBook component when 'add book' button is clicked", async () => {
  await act(() => {
    render(<BookList />);
  }); 
  const addButton = screen.getByText("add book");
  fireEvent.click(addButton);
  const createBookComponent = screen.getByText(/save/i);
  expect(createBookComponent).toBeInTheDocument();
});

test("Fetches and displays books", async () => {
  await act(() => {
    render(<BookList />);
  }); 
  await waitFor(() => expect(screen.getByText("Snowflake: The Definitive Guide")).toBeInTheDocument());
});

test("Filters books by title", async () => {
    await act(() => {
        render(<BookList />);
    });
    expect(screen.getByText("Snowflake: The Definitive Guide")).toBeInTheDocument();
    expect(screen.getByText("Python for Data Analysis, 3rd Edition")).toBeInTheDocument();
    const filterInput = screen.getByPlaceholderText("Filter books by title");
    fireEvent.change(filterInput, { target: { value: "Python" } });
    await waitFor(() => {
      expect(screen.getByText("Python for Data Analysis, 3rd Edition")).toBeInTheDocument();
      expect(screen.queryByText("Snowflake: The Definitive Guide")).not.toBeInTheDocument();
    });
});

//Test with MSW
/* test("Fetches and displays books", async () => {
    render(<BookList />);
    const book1 = await screen.findByText("An Introduction to C & GUI Programming, 2nd Edition");
    const book2 = await screen.findByText("Snowflake: The Definitive Guide");
    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
}); */