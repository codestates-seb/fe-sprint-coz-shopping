import React, { useEffect, useState } from "react";
import "./productlist.css";
import { productsLimitFour } from "../shared/products";

export const ProductList = () => {
  const [viewProductList, setViewProductList] = useState([]);
  const productList = productsLimitFour;

  useEffect(() => {
    fetch(productList) //
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setViewProductList(data);
      });
  }, []);

  return (
    <article>
      <h1>상품 리스트</h1>
    </article>
  );
};
