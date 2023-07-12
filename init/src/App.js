import "./App.css";
import Bookmark from "./pages/Bookmark";
import ProductList from "./pages/ProductList";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/products/list" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
