import BookMark from "./pages/BookMark";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/products/list" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
