import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/product/list" element={<ProductList />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
