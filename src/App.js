import React from 'react';
import Main from './page/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';
import { BrowserRouter, BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Listpage from './page/Listpage';
import Bookmarkpage from './page/Bookmarkpage';
import Menu from './component/Menu';


function App() {
  return (
    <BrowserRouter>
        <Header/>
            <Routes>
              {/* <Route path='/' element={<Main/>}/>
              <Route path='/products/list' element={<Listpage/>}/>
              <Route path='/bookmark' element={<Bookmarkpage/>}/> */}
            </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
