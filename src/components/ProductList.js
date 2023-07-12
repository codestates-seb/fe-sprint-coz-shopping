import React from "react";
// import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { MyContext } from "../App";

const ProductList = () => {
  const data = useContext(MyContext);

  return (
    <section>
      <div className="ProductList">
        <div className="text">상품 리스트</div>
        <div>
          <ProductItem {...data} />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
