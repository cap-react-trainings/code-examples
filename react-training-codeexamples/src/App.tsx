import "./App.css";
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
                <BookList />
            </div>
        </div>
    );
}

export default App;
