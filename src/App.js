import "./App.css";
import Bookmark from "./pages/Bookmark";
import ProductList from "./pages/ProductList";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [message, setMessage] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                bookMark={bookMark}
                setBookMark={setBookMark}
                message={message}
                setMessage={setMessage}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <Bookmark
                bookMark={bookMark}
                setBookMark={setBookMark}
                message={message}
                setMessage={setMessage}
              />
            }
          />
          <Route
            path="/products/list"
            element={
              <ProductList
                bookMark={bookMark}
                setBookMark={setBookMark}
                message={message}
                setMessage={setMessage}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
