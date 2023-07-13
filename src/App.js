import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Component/Header";
import MainPage from "./Page/MainPage";
import ProductListPage from "./Page/ProductListPage";
import BookmarkPage from "./Page/BookmarkPage";
import Footer from "./Component/Footer";

function App() {
  const [mainProductList, setMainProductList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [bookmarkList, setBookmarkList] = useState(() => {
    return JSON.parse(localStorage.getItem("bookmark")) || []
  });

  async function getMainProductList() {
    try {
      const res = await axios
        .get(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`);
      setMainProductList(res.data);
    } catch (err) {
      return console.log(err);
    }
  }

  async function getProductList() {
    try {
      const res = await axios
        .get(`http://cozshopping.codestates-seb.link/api/v1/products`);
      setProductList(res.data);
    } catch (err) {
      return console.log(err);
    }
  }

  useEffect(() => {
    getProductList();
    getMainProductList();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage mainProductList={mainProductList} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />} />
          <Route path="/products/list" element={<ProductListPage productList={productList} />} />
          <Route path="/bookmark" element={<BookmarkPage productList={productList} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
