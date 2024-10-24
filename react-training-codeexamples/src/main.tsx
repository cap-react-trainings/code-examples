import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BookDetail, { loader as bookLoader, ErrorBoundary } from "./components/book/BookDetail";
import BookList from "./components/book/BookList";
import React from "react";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<BookList />}></Route>
      <Route path='/detail/:id' element={<BookDetail />} loader={bookLoader} errorElement={<ErrorBoundary />}></Route>
    </>
  )
);

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
