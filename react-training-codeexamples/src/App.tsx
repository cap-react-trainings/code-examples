import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookDetail from "./components/book/BookDetail";
import BookList from "./components/book/BookList";

function App() {

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/detail/:id" element={<BookDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
