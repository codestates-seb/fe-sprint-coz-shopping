import "./App.css";
import Bookmark from "./pages/Bookmark";
import ProductList from "./pages/ProductList";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [message, setMessage] = useState("");
  const [ids, setIds] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                products={products}
                bookMark={bookMark}
                setBookMark={setBookMark}
                message={message}
                setMessage={setMessage}
                ids={ids}
                setIds={setIds}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <Bookmark
                bookMark={bookMark}
                products={products}
                setBookMark={setBookMark}
                message={message}
                setMessage={setMessage}
                ids={ids}
                setIds={setIds}
              />
            }
          />
          <Route
            path="/products/list"
            element={
              <ProductList
                bookMark={bookMark}
                products={products}
                setBookMark={setBookMark}
                message={message}
                setMessage={setMessage}
                ids={ids}
                setIds={setIds}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
