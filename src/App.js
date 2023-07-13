import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Pages/Main";
import ProductList from "./Pages/Productlist";
import BookmarkList from "./Pages/Bookmarklist";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/products/list" element={<ProductList/>}/>
              <Route path="/bookmark" element={<BookmarkList/>}/>
            </Routes>
          <Footer/>
        </div>  
      </BrowserRouter>
  );
}

export default App;
