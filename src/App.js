import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import Footer from "./component/Footer";
import BookMark from "./page/BookMark";
import ProductListPage from "./page/ProductListPage";
import Header from "./component/Header";
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        setProducts(res.data.map((el) => ({ ...el, checked: false })));
      })
      .catch((err) => console.log(err));
  }, []);



  // --------------- //
  useEffect(() => {
    console.log("Updated Products:", products);
  }, [products]);



  const toggleBookmark = (item) => {
    // -------------------//
    console.log("Toggle Bookmark:", item);

    setProducts((prevProduct) =>
      prevProduct.map((product) => {
        return product.id === item.id ? { ...product, checked: !product.checked } : product;
      })
    );
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/"
              element={<MainPage
              products={products}
              toggleBookmark={toggleBookmark}
            />} />
          <Route path="/bookmark"
              element={<BookMark
              products={products}
              toggleBookmark={toggleBookmark}
            />} />
          <Route path="/products/list"
              element={<ProductListPage
              products={products}
              toggleBookmark={toggleBookmark}
            />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}
export default App;


