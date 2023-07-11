import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import ItemList from './components/pages/ItemList';
import BookmarkPage from './components/pages/BookmarkPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/list" element={<ItemList />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
