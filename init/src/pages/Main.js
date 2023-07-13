import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import styled from "styled-components";
import Toast from "../components/Toast";
import { useEffect, useState } from "react";

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

function Main({
  bookMark,
  setBookMark,
  message,
  setMessage,
  products,
  ids,
  setIds,
}) {
  const [toastState, setToastState] = useState(false);
  const [booked, setBooked] = useState(false);

  function checkInputValues() {
    setToastState(true);
  }

  useEffect(() => {
    if (bookMark.length !== 0) {
      setBooked(true);
    } else {
      setBooked(false);
    }
  }, [bookMark]);

  return (
    <Container>
      <Header />
      <MainContainer>
        <ProdSpan>상품 페이지</ProdSpan>
        <Product
          bookMark={bookMark}
          setBookMark={setBookMark}
          checkInputValues={checkInputValues}
          setMessage={setMessage}
          products={products}
          ids={ids}
          setIds={setIds}
        />
        <ProdSpan>북마크 리스트</ProdSpan>
        {booked ? (
          <Product
            bookMark={bookMark}
            booked={booked}
            setBookMark={setBookMark}
            checkInputValues={checkInputValues}
            setMessage={setMessage}
            products={products}
            ids={ids}
            setIds={setIds}
          />
        ) : (
          "아직 북마크 하신게 없군요!"
        )}
      </MainContainer>
      <Footer />
      {toastState === true ? (
        <Toast setToastState={setToastState} msg={message} />
      ) : null}
    </Container>
  );
}

export default Main;
