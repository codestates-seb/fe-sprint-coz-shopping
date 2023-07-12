import { React, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import BookmarkPage from './pages/BookmarkPage';
import axios from 'axios';

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        setProductData(res.data.map((product) => {
          return { ...product };
        }))
      })
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage productData={productData} />} />
          <Route path="/products/list" element={<ProductListPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
