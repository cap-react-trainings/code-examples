import { render, screen } from "@testing-library/react";
import BookDetail from "./BookDetail";

// 👇 Mock von useLoaderData aus react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: () => ({
    book: {
      title: "Test Book",
      subtitle: "Test Subtitle",
      authors: "John Doe",
      publisher: "Test Publisher",
      language: "English",
      isbn10: "1234567890",
      isbn13: "1234567890123",
      pages: "300",
      year: "2023",
      rating: "5",
      desc: "This is a test description.",
      price: "$20.00",
      image: "https://via.placeholder.com/150",
      url: "https://example.com"
    }
  })
}));

describe("BookDetail", () => {
  it("renders book details correctly", () => {
    render(<BookDetail />);

    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("Authors: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Year: 2023")).toBeInTheDocument();
    expect(screen.getByAltText("Test Book")).toBeInTheDocument();
  });
});
