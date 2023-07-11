import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";

import { Footer } from "./components/Footer";
import "./App.css";
import { ProductPage } from "./pages/ProductPage";
import { BookmarkPage } from "./pages/BookmarkPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
