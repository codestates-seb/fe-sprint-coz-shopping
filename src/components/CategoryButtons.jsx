import React from "react";
import { styled } from "styled-components";

const StyleCategoryButton = styled.div`
  display: flex;
  gap: 36px;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    gap: 6.5px;
  }
  button.active span {
    color: #412dd4;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-bottom: 2px solid #412dd4;
  }
`;

export default function CategoryButtons({ category, categoryHandler }) {
  const buttons = [
    { category: "All", image: "/images/categoryAll.svg", text: "전체" },
    { category: "Product", image: "/images/categoryProduct.svg", text: "상품" },
    { category: "Category", image: "/images/categoryCategory.svg", text: "카테고리" },
    { category: "Exhibition", image: "/images/categoryExhibition.svg", text: "기획전" },
    { category: "Brand", image: "/images/categoryBrand.svg", text: "브랜드" },
  ];
  return (
    <StyleCategoryButton>
      {buttons.map((button) => (
        <button
          className={button.category === category ? "active" : ""}
          key={button.category}
          onClick={() => categoryHandler(button.category)}
        >
          <img src={button.image} alt={button.category} />
          <span>{button.text}</span>
        </button>
      ))}
    </StyleCategoryButton>
  );
}
