import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import { createContext, useEffect, useState } from "react";
import Bookmark from "./page/Bookmark";
import ProductList from "./page/ProductList";

export const ProductsContext = createContext();

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
          <Route
            path="/"
            element={
              <ProductsContext.Provider value={{ products }}>
                <Main />
              </ProductsContext.Provider>
            }
          />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
