
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/"/>
            <Route path="/products/list"/>
            <Route path="/bookmark"/>
          </Routes>
        <Footer/>  
      </BrowserRouter>

  );
}

export default App;
