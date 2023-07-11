import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import MainPage from "./Page/MainPage";
import ProductListPage from "./Page/ProductListPage";
import BookmarkPage from "./Page/BookmarkPage";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/list" element={<ProductListPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
