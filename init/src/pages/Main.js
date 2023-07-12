import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

import styled from "styled-components";
import { useState } from "react";

const ProdSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 24px 76px;
`;

const MainContainer = styled.div`
  height: 832px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function Main() {
  const [type, setType] = useState(null);
  return (
    <>
      <Header />
      <MainContainer>
        <ProdSpan>상품 페이지</ProdSpan>
        <Product type={type} />
        <ProdSpan>북마크 리스트</ProdSpan>
        <Product type={type} />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Main;
