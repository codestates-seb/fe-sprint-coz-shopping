import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import List from './pages/product/list';
import Bookmark from './pages/bookmark';
import Head from './component/head';

function App() {
  return (
    <BrowserRouter>
    <Head/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>      
      <Route path='/product/list' element={<List/>}></Route>      
      <Route path='/bookmark' element={<Bookmark/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
