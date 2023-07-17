import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import Footer from "./component/Footer";
import BookMark from "./page/BookMark";
import ProductListPage from "./page/ProductListPage";
import Header from "./component/Header";

// 헤더, 푸터 

function App() {
  
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/products/list" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>

  )
}

export default App;
