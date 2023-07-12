import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./router/Main";
import Products from "./router/Products";
import Bookmark from "./router/Bookmark";
import { useSelector, useDispatch } from "react-redux";
import { updateAllProducts } from "./features/AllProductsSlice";
import { updateLoding } from "./features/Loding";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const AllProducts = useSelector((state) => state.AllProducts);
  const isLoding = useSelector((state) => state.Loding);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((el) => el.json())
      .then((el) => {
        dispatch(updateAllProducts(el));
        dispatch(updateLoding(!isLoding));
      });
  }, []);

  console.log(AllProducts);
  console.log(isLoding);

  return (
    <BrowserRouter>
      <Div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<Products />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
        <Footer />
      </Div>
    </BrowserRouter>
  );
}

export default App;
