import React, { useEffect, useState } from "react";
import "./productlist.css";
import { productsLimitFour } from "../shared/products";

export const ProductList = () => {
  const [viewProductList, setViewProductList] = useState([]);
  const productList = productsLimitFour;

  useEffect(() => {
    fetch(productList)
      .then((res) => res.json())
      .then((data) => {
        setViewProductList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(viewProductList, "data");
  return (
    <article>
      <h1>상품 리스트</h1>
      {viewProductList.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <img src={post.image_url} alt="" />
        </div>
      ))}
    </article>
  );
};
