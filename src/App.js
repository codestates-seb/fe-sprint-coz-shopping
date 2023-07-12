import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import MainPage from "./Page/MainPage";
import ProductListPage from "./Page/ProductListPage";
import BookmarkPage from "./Page/BookmarkPage";
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";

function App() {
  const [isMenu, setIsMenu] = useState(false);

  function menuPopUp() {
    setIsMenu(!isMenu);
  }

  return (
    <BrowserRouter>
      <div>
        { isMenu === true ? <Menu menuPopUp={menuPopUp} /> : null }
        <Header menuPopUp={menuPopUp} />
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
