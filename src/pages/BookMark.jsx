import React from "react";
import { StyleMain } from "../core/Main";
import { styled } from "styled-components";
import CategoryButtons from "../components/CategoryButtons";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
const StyleBookMarkPageMain = styled(StyleMain)`
  gap: 24px;
  ul {
    width: 1128px;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
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

export default function BookMark({ products, bookMarkHandler, modalHandler }) {
  const [category, setCategory] = useState("All");
  const [pageNum, setPageNum] = useState(1);

  const categoryHandler = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      if (scrollHeight - clientHeight <= scrollTop + 1) {
        pageNumHandler();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      setPageNum(1);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category]);

  const pageNumHandler = () => {
    setPageNum((pre) => pre + 1);
  };
  return (
    <StyleBookMarkPageMain>
      {" "}
      <CategoryButtons categoryHandler={categoryHandler} category={category} />
      <ul>
        {products
          .filter((el) => (el.type === category || category === "All") && el.checked)
          .slice(0, pageNum * 12).length ? (
          products
            .filter((el) => (el.type === category || category === "All") && el.checked)
            .slice(0, pageNum * 12)
            .map((el) => (
              <ProductCard
                key={el.id}
                product={el}
                bookMarkHandler={bookMarkHandler}
                modalHandler={modalHandler}
              />
            ))
        ) : (
          <h5>북마크된 항목이 존재하지 않습니다</h5>
        )}
      </ul>
    </StyleBookMarkPageMain>
  );
}
