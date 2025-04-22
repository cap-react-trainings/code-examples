import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetail, { bookLoader, ErrorBoundary } from "./components/book/BookDetail";
import BookList from "./components/book/BookList";
import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BookList />
      },
      {
        path: "/detail/:id",
        element: <BookDetail />,
        loader: bookLoader,
        errorElement: <ErrorBoundary />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className='App'>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
