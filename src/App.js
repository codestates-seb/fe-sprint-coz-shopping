import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Component/Header";
import MainPage from "./Page/MainPage";
import ProductListPage from "./Page/ProductListPage";
import BookmarkPage from "./Page/BookmarkPage";
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";

function App() {
  const [isMenu, setIsMenu] = useState(false);
  const [productList, setProductList] = useState([]);
  const [bookmarkList, setBookmarkList] = useState(() => {
    return JSON.parse(localStorage.getItem("bookmark")) || []
  });

  function menuPopUp() {
    setIsMenu(!isMenu);
  }

  async function getProductList() {
    try {
      const res = await axios
        .get(`http://cozshopping.codestates-seb.link/api/v1/products`);
      console.log(res.data);
      setProductList(res.data);
    } catch (err) {
      return console.log(err);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <BrowserRouter>
      <div>
        { isMenu === true ? <Menu isMenu={isMenu} menuPopUp={menuPopUp} /> : null }
        <Header menuPopUp={menuPopUp} />
        <Routes>
          <Route path="/" element={<MainPage productList={productList} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />} />
          <Route path="/products/list" element={<ProductListPage productList={productList} />} />
          <Route path="/bookmark" element={<BookmarkPage productList={productList} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
