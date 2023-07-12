import './App.css';
import Header from './components/header.js';
import React, {component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './pages/main.js';
import Products from './pages/products';
import Bookmark from './pages/bookmark';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products/List' element={<Products />} />
            <Route path='/bookmark' element={<Bookmark />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
