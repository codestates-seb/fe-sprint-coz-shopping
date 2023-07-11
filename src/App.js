import BookMark from "./pages/BookMark";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/products/list" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
