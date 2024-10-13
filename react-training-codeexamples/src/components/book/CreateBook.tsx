import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Book } from "./BookList";

interface Props {
  onSave: (newBook: Book) => any;
  onExit: () => any;
}

const CreateBook = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>({
    defaultValues: {
      title: "",
      subtitle: "",
      isbn13: "",
      price: "",
      image: "",
      url: "",
    },
  });

  // in a real world scenario, you would post to an API here
  const onSubmit = (newBook: Book) => props.onSave(newBook);
  return (
    <div style={{ width: "50vw" }}>
      <div
        style={{
          marginTop: 16,
          textAlign: "start",
        }}
      >
        <button
          onClick={props.onExit}
          style={{
            backgroundColor: "#e1f5fe",
            borderRadius: 2,
            padding: 8,
            width: "fit-content",
            fontSize: 16,
          }}
        >
          go back
        </button>
      </div>
      <h1 style={{ marginBottom: 12 }}>Create a new book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              {...register("title", { required: "Please enter a title" })}
              style={{ width: 400 }}
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <label htmlFor="subtitle">Subtitle:</label>
            <input
              id="subtitle"
              style={{ width: 400 }}
              {...register("subtitle", {
                required: "Please enter a sub-title",
              })}
            />
            {errors.subtitle && <span>{errors.subtitle.message}</span>}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <label htmlFor="isbn">ISBN:</label>
            <input
              id="isbn"
              {...register("isbn13", { required: "Please enter an ISBN-Code" })}
              style={{ width: 400 }}
            />
            {errors.isbn13 && <span>{errors.isbn13.message}</span>}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              {...register("price", { required: "Please enter a price" })}
              style={{ width: 400 }}
            />
            {errors.price && <span>{errors.price.message}</span>}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <label htmlFor="image">Image:</label>
            <input
              id="image"
              {...register("image", { required: "Please enter an image URL" })}
              style={{ width: 400 }}
            />
            {errors.image && <span>{errors.image.message}</span>}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <label htmlFor="url">URL:</label>
            <input
              id="url"
              {...register("url", { required: "Please enter a title" })}
              style={{ width: 400 }}
            />
            {errors.image && <span>{errors.image.message}</span>}
          </div>
          <button type="submit" className="submit-button">
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
