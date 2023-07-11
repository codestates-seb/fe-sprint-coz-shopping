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
      <div className="card__list">
        {viewProductList.map((post) => (
          <div key={post.id} className="card">
            <img src={post.image_url} alt="product logo" />
            <div className="card__info">
              <p>{post.title}</p>
              <div className="card__info__price">
                <p>
                  {post.discountPercentage
                    ? `${post.discountPercentage}%`
                    : null}
                </p>
                <p>{post.price ? `${post.price}원` : null}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
