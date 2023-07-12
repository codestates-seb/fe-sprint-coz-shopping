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
  const [mainProductList, setMainProductList] = useState([]);

  function menuPopUp() {
    setIsMenu(!isMenu);
  }

  function getMainProductList() {
    return axios
        .get(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
        .then((res) => {
          console.log(res.data);
          setMainProductList(res.data);
        })
        .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMainProductList();
  }, []);

  return (
    <BrowserRouter>
      <div>
        { isMenu === true ? <Menu isMenu={isMenu} menuPopUp={menuPopUp} /> : null }
        <Header menuPopUp={menuPopUp} />
        <Routes>
          <Route path="/" element={<MainPage mainProductList={mainProductList} />} />
          <Route path="/products/list" element={<ProductListPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
