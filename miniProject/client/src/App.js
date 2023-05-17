import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from'./components/Footer'
import BookmarkList from'./components/BookmarkList'
import List from'./components/List'
import Main from'./pages/Main'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function App() {
  return (
    <>
     
     <div className='wrapper'>
      <Router>
      <Header/>
      <div className='contentWrapper'>
        <BookmarkList/>
        <List/>
      </div>
      <Routes>
          <Route path="/"  element={<Main/>}/> 
          <Route path="/products/list" element={<div>상품리스트 페이지</div>}/>  
          <Route path="/bookmark" element={<div>북마크 페이지</div>}/>
          <Route path="*" element={<div>없는 페이지요</div>}/>
        </Routes>
      </Router>
      <Footer/>
     </div>
   
      

    </>
 
  );
}

export default App;
