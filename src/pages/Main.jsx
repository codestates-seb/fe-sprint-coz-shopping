import React from "react";
import "./main.css";
import { ProductList } from "../components/ProductList";
import { BookmarkList } from "../components/BookmarkList";

export const Main = () => {
  return (
    <main>
      <section>
        <ProductList />
        <BookmarkList />
      </section>
    </main>
  );
};
