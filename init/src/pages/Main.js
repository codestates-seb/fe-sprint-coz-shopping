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

const Container = styled.div`
  height: 100vh;
`;

function Main() {
  return (
    <Container>
      <Header />
      <MainContainer>
        <ProdSpan>상품 페이지</ProdSpan>
        <Product />
        <ProdSpan>북마크 리스트</ProdSpan>
        <Product />
      </MainContainer>
      <Footer />
    </Container>
  );
}

export default Main;
