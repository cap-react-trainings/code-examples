export interface BookInterface {
  title: string;
  author: string;
  releaseDate: string;
}

interface Props {
  book: BookInterface;
}

const Book: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <p>Author: {props.book.author}</p>
      <p>Release Date: |{props.book.releaseDate}</p>
    </div>
  );
};

export default Book;
