import { FunctionComponent } from "react";
import { Book } from "../../testData/Booklist";
import styled from "styled-components";

interface Props {
  book: Book;
}

const StyledBookContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
`;

const StyledBookContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 1rem;
`;

const StyledCaption = styled.p`
  margin-bottom: 8px;
  color: #757575;
  font-size: 0.8rem;
`;

const StyledLabel = styled.div`
  background-color: #ef5350;
  padding: 8px;
  height: 25px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

/**
 * hint: take a look at the class names in dev tools
 */

const BookItem: FunctionComponent<Props> = ({ book }: Props) => {
  /**
   * styling can be ignored for the moment, will be covered later on
   */
  return (
    <StyledBookContainer>
      <StyledBookContent>
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <StyledCaption>release date: {book.releaseDate}</StyledCaption>
      </StyledBookContent>
      {!book.inStore && (
        <StyledLabel>
          <p style={{ color: "#fff", fontSize: "12px" }}>
            currently not available
          </p>
        </StyledLabel>
      )}
    </StyledBookContainer>
  );
};

export default BookItem;
