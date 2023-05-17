import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState } from "react";

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element></Route>
        <Route path='/' element></Route>
        <Route path='/' element></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
