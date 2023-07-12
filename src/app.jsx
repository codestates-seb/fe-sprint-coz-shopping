import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "components/header";
import Footer from "components/footer";
import Main from "pages/main";
import ProductList from "pages/product_list";
import Bookmark from "pages/bookmark";
import NotFound from "pages/not_found";

const Home = () => {
  return (
    <BrowserRouter>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/index.html" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Home;
