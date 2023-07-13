import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import styled from "styled-components";
import Toast from "../components/Toast";
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

function Main({ bookMark, setBookMark }) {
  const [toastState, setToastState] = useState(false);

  function checkInputValues() {
    setToastState(true); // hi
  }

  return (
    <Container>
      <Header />
      <MainContainer>
        <ProdSpan>상품 페이지</ProdSpan>
        <Product
          bookMark={bookMark}
          setBookMark={setBookMark}
          checkInputValues={checkInputValues}
        />
        <ProdSpan>북마크 리스트</ProdSpan>
        <Product
          bookMark={bookMark}
          setBookMark={setBookMark}
          checkInputValues={checkInputValues}
        />
      </MainContainer>
      <Footer />
      {toastState === true ? <Toast setToastState={setToastState} /> : null}
    </Container>
  );
}

export default Main;
