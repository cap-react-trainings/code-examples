import "./App.css";
import BookItem from "./components/book/Book";
import { books } from "./testData/Booklist";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <StyledContainer>
        <div>
          <h1>Booklist</h1>
          {!!books.length ? (
            books.map((book, index) => <BookItem book={book} key={index} />)
          ) : (
            <p>no books available 😢 </p>
          )}
        </div>
      </StyledContainer>
    </div>
  );
}

export default App;
