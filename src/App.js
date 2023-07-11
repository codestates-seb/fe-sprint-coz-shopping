import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { ProductList } from "./pages/ProductList";
import { Bookmark } from "./pages/Bookmark";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/bookmarks" element={<Bookmark />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
