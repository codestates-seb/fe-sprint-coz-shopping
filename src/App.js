import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import Bookmark from "./pages/Bookmark";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/ProductList" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
