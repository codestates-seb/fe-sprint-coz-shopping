import React from "react";
import "./main.css";
import { ProductList } from "../components/ProductList";
import { BookmarkList } from "../components/BookmarkList";

export const Main = () => {
  return (
    <main>
      <section>
        <h1>상품 리스트</h1>
        <ProductList />
        <BookmarkList />
      </section>
    </main>
  );
};
