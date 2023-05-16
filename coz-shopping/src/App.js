import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import { useEffect, useState } from "react";
import Bookmark from "./page/Bookmark";
import ProductList from "./page/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  // const [bookmark, setBookmark] = useState([]);

  const getData = async () => {
    const json = await (
      await fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
    ).json();

    setProducts(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
