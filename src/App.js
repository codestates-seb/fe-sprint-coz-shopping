import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import BookmarkPage from "./page/BookmarkPage";
import ProductListPage from "./page/ProductListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/productlist" element={<ProductListPage />}></Route>
          <Route path="/bookmark" element={<BookmarkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
