import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { ProdSpan, MainContainer, Container } from "./MainStyle";
import Toast from "../components/Toast";
import { useEffect, useState } from "react";

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

  function toastSetMain() {
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
          toastSetMain={toastSetMain}
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
            toastSetMain={toastSetMain}
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
