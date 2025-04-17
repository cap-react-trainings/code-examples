import { createContext, useState } from "react";
import "./App.css";
import BookList from "./components/book/BookList";

/**
 * This is a context that can be used to determine if dark mode is enabled or not.
 */
export const DarkModeContext = createContext<{
    isDarkModeEnabled: boolean;
    toggleDarkMode: () => void;
}>({
    isDarkModeEnabled: false,
    toggleDarkMode: () => {},
});

function App() {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
    return (
      // We're passing in the current value of the dark mode to the context provider,
      // so that all child components can access it.
      <DarkModeContext
        value={{
          isDarkModeEnabled,
          toggleDarkMode: () => setIsDarkModeEnabled(!isDarkModeEnabled),
        }}
      >
        <div
          className="App"
          style={{
            background: isDarkModeEnabled ? "black" : "white",
            padding: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BookList />
          </div>
        </div>
      </DarkModeContext>
    );
}

export default App;
