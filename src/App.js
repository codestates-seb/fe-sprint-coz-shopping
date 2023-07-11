import BookMark from "./pages/BookMark";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
