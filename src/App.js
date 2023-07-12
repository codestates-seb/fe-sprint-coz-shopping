import BookMark from "./pages/BookMark";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import ToastConatiner from "./components/ToastConatiner";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toasts, setToast] = useState([]);

  const addToast = (toast) => {
    setToast((prevToasts) => [...prevToasts, { toast, id: uuidv4() }]);
  };

  const removeToast = () => {
    setToast((prevToasts) => prevToasts.slice(1));
  };

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        setProducts(res.data.map((el) => ({ ...el, checked: false })));
      })
      .catch((err) => console.log(err));
  }, []);

  const itemBookMarkHandler = (item) => {
    setProducts((preProduct) =>
      preProduct.map((product) => {
        return product.id === item.id ? { ...product, checked: !product.checked } : product;
      })
    );
    if (modalIsOpen) {
      setModalIsOpen((preModalItem) => ({ ...preModalItem, checked: !preModalItem.checked }));
    }
    addToast(!item.checked);

    setTimeout(() => {
      removeToast();
    }, 3000);
  };
  const modalIsOpenHandler = (item) => {
    setModalIsOpen(item);
  };

  return (
    <BrowserRouter>
      <ToastConatiner toasts={toasts} />
      {modalIsOpen ? (
        <Modal
          item={modalIsOpen}
          modalHandler={modalIsOpenHandler}
          bookMarkHandler={itemBookMarkHandler}
        />
      ) : (
        ""
      )}
      <Header />
      {products.slice(0, 3)?.map((item) => (
        <ProductCard
          item={item}
          key={item.id}
          bookMarkHandler={itemBookMarkHandler}
          modalHandler={modalIsOpenHandler}
        />
      ))}
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
