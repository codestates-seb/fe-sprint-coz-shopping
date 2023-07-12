import React from "react";
import { StyleMain } from "../core/Main";
import { styled } from "styled-components";
import ProductCard from "../components/ProductCard";

const StyleMainPageMain = styled(StyleMain)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  section {
    width: 1128px;
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  ul {
    width: 100%;
    display: flex;
    gap: 24px;
    justify-content: flex-start;
    height: 264px;
  }
  h5 {
    position: relative;
    right: 0;
    left: 0;
    margin: auto;
    font-size: 24px;
    color: #80808080;
  }
`;
export default function MainPage({ products, bookMarkHandler, modalHandler, randomProducts }) {
  return (
    <StyleMainPageMain>
      <section>
        <h3>상품 리스트</h3>
        <ul>
          {products
            .filter((product) => !product.checked)
            .slice(0, 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                bookMarkHandler={bookMarkHandler}
                modalHandler={modalHandler}
              />
            ))}
        </ul>
      </section>
      <section>
        <h3>북마크 리스트</h3>
        <ul>
          {products.filter((product) => product.checked).slice(0, 4).length ? (
            products
              .filter((product) => product.checked)
              .slice(0, 4)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  bookMarkHandler={bookMarkHandler}
                  modalHandler={modalHandler}
                />
              ))
          ) : (
            <h5>북마크된 항목이 없어요!</h5>
          )}
        </ul>
      </section>
    </StyleMainPageMain>
  );
}
