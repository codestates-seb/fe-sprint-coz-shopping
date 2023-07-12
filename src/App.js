import "./App.css";
import Main from "./pages/Main";
import BookmarkPage from "./pages/BookmarkPage";
import ProductPage from "./pages/ProductPage";
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";

export const MyContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const getData = async () => {
    const res = await fetch(
      "http://cozshopping.codestates-seb.link/api-docs/api/v1/products"
    ).then((res) => res.json());

    const initData = res.slice().map((it) => {
      return {
        id: dataId.current++,
        type: it.type,
        title: it.title,
        sub_title: it.sub_title,
        brand_name: it.brand_name,
        image_url: it.image_url,
        brand_image_url: it.brand_image_url,
        follower: it.follower,
      };
    });

    setData(initData);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyContext.Provider value={data}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/list" element={<ProductPage />} />
            <Route path="/bookmark" element={<BookmarkPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
