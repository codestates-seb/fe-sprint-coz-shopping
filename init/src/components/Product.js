import DetailProduct from "./DetailProduct";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ProdContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Product() {
  const [prodList, setProdList] = useState([]);
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        setProdList(res.data);
      });
  }, []);

  return (
    <>
      <ProdContainer>
        {prodList.map((elem) => {
          return <DetailProduct key={elem.id} elem={elem} />;
        })}
      </ProdContainer>
    </>
  );
}

export default Product;
