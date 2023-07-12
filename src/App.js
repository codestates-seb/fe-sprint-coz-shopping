import React from 'react'
import './App.css';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import Bookmark from './pages/Bookmark'
import ProductList from './pages/ProductList'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useEffect, useState } from "react"
import { data } from './data/data.js'


function App() {

  const [isProduct, setProduct] = useState(data)
  const [isBookmark, setBookmark] = useState(data)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main isProduct={isProduct} isBookmark={isBookmark} />} />
          <Route path='/product' element={<ProductList isProduct={isProduct} />} />
          <Route path='/bookmark' element={<Bookmark isBookmark={isBookmark} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
