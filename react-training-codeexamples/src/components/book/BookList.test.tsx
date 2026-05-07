import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookList from "./BookList";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
//Required for MSW
//import "../../setupTests";

vi.mock("./CreateBook", () => ({
  default: () => <p>mocked-create-book-component</p>
}));

const responseData = {
  books: [
    {
      title: "An Introduction to C & GUI Programming, 2nd Edition",
      subtitle: "",
      isbn13: "9781912047451",
      price: "$12.94",
      image: "https://itbook.store/img/books/9781912047451.png",
      url: "https://itbook.store/books/9781912047451"
    },
    {
      title: "Snowflake: The Definitive Guide",
      subtitle: "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
      isbn13: "9781098103828",
      price: "$58.90",
      image: "https://itbook.store/img/books/9781098103828.png",
      url: "https://itbook.store/books/9781098103828"
    },
    {
      title: "Python for Data Analysis, 3rd Edition",
      subtitle: "Data Wrangling with pandas, NumPy, and Jupyter",
      isbn13: "9781098104030",
      price: "$34.96",
      image: "https://itbook.store/img/books/9781098104030.png",
      url: "https://itbook.store/books/9781098104030"
    }
  ]
};

describe("<BookList />", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue(responseData)
      })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("Fetches and displays books", async () => {
    render(
      <MemoryRouter>
        <BookList />
      </MemoryRouter>
    );
    expect(await screen.findByText("Snowflake: The Definitive Guide")).toBeInTheDocument();
  });

  test("Shows CreateBook component when 'add book' button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <BookList />
      </MemoryRouter>
    );

    const addButton = await screen.findByRole("button", { name: "add book" });
    await user.click(addButton);

    const mockedCreateBookComponent = await screen.findByText("mocked-create-book-component");
    expect(mockedCreateBookComponent).toBeInTheDocument();
  });

  test("Filters books by title", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <BookList />
      </MemoryRouter>
    );

    expect(await screen.findByText("Snowflake: The Definitive Guide")).toBeInTheDocument();

    expect(await screen.findByText("Python for Data Analysis, 3rd Edition")).toBeInTheDocument();

    const filterInput = await screen.findByPlaceholderText("Filter books by title");
    await user.type(filterInput, "Python");

    expect(await screen.findByText("Python for Data Analysis, 3rd Edition")).toBeInTheDocument();

    expect(screen.queryByText("Snowflake: The Definitive Guide")).not.toBeInTheDocument();
  });

  //Test with MSW
  /* test("Fetches and displays books", async () => {
    render(<BookList />);
    const book1 = await screen.findByText("An Introduction to C & GUI Programming, 2nd Edition");
    const book2 = await screen.findByText("Snowflake: The Definitive Guide");
    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
}); */
});
