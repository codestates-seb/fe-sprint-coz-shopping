import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import List from './pages/product/list';
import Bookmark from './pages/bookmark';
import Head from './components/head';
import {useState, useEffect} from 'react';
import Footer from './components/footer';

function App() {
  const [productData, setProductData] = useState([]);
   
  useEffect(()=>fetch('http://cozshopping.codestates-seb.link/api/v1/products')
  .then((res)=>res.json())
  .then((data)=>setProductData(data)),[]);    

  return (
    <BrowserRouter>
    <Head/>
    <Routes>
      <Route path='/' element={<Main productData={productData}/>}></Route>      
      <Route path='/product/list' element={<List productData={productData}/>}></Route>      
      <Route path='/bookmark' element={<Bookmark productData={productData}/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
