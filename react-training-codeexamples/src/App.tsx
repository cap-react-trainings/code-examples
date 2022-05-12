import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import BookList from "./components/book-list/BookList";
export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BookList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
