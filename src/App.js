import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import Footer from "./component/Footer";
import BookMark from "./page/BookMark";
import ProductListPage from "./page/ProductListPage";
import Header from "./component/Header";
import axios from 'axios';

// 헤더, 푸터 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error('API 요청 중 오류가 발생했습니다:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage
                      products={products}
                      />} />
        <Route path="/bookmark" element={<BookMark
                      products={products}
                      />} />
        <Route path="/products/list" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>

  )
}

export default App;
