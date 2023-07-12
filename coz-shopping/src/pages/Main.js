import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import axios from "axios";

function Main({ bookmarks, setBookmarks, products, setProducts }) {
  const [product, setProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="listbox">
        <h2>상품 리스트</h2>
      </div>
      <div className="listbox">
        <h2>북마크 리스트</h2>
      </div>
    </>
  );
}

export default Main;
