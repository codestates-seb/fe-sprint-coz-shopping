import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import styled from 'styled-components';
import "react-toastify/dist/ReactToastify.css";
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
  const [curFilter, setCurFilter] = useState("All");

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
    <div>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={
                <MainPage 
                    mainProductList={mainProductList} 
                    bookmarkList={bookmarkList} 
                    setBookmarkList={setBookmarkList} 
                />}
            />
            <Route path="/products/list" element={
                <ProductListPage 
                    productList={productList} 
                    bookmarkList={bookmarkList} 
                    setBookmarkList={setBookmarkList}
                    curFilter={curFilter} 
                    setCurFilter={setCurFilter}
                />} 
            />
            <Route path="/bookmark" element={
                <BookmarkPage 
                    bookmarkList={bookmarkList}
                    setBookmarkList={setBookmarkList}
                    curFilter={curFilter}
                    setCurFilter={setCurFilter}
                />} 
            />
          </Routes>
        <Container 
            position="bottom-right" 
            autoClose={3000}
            hideProgressBar={true}
        />
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;


// styled-components
const Container = styled(ToastContainer)`
  .Toastify__toast {
    width: 305px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    padding: 18px 20px;
    box-sizing: border-box;
    color: black;
    display: flex;
    align-items: center;
  }

  .Toastify__toast-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`
