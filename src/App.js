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
  const fetchProducts = async () => {
  try {
  // 지정된 URL로 GET 요청을 보내고 응답을 기다림
  const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
  // 응답에서 데이터를 추출
  const data = response.data;
    // 'products' 상태를 검색한 데이터로 업데이트
  setProducts(data);
  console.log(data);

  } catch (error) {
  // API 요청 중에 발생한 오류처리
  console.error('API 요청 중 오류가 발생했습니다:', error);
  }
  };
  
  // 컴포넌트가 마운트될 때 fetchProducts 함수를 실행
  fetchProducts();
  }, []);


  
const toggleBookmark = (item) => {
  setProducts((prevProduct) =>
    prevProduct.map((product) => {
      if (product.id === item.id) {
        return { ...product, checked: !product.checked };
      } else {
        return product;
      }
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


