import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import DetailProduct from "../components/DetailProduct";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Container = styled.div`
  height: 100vh;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  margin-right: 23px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const TypeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const P = styled.p`
  font-size: 1rem;
  text-align: center;
`;

function ProductList({
  bookMark,
  setBookMark,
  message,
  setMessage,
  products,
  ids,
  setIds,
}) {
  const [filtered, setFiltered] = useState(products);
  const [infinite, setInfinite] = useState([]);
  const [toastState, setToastState] = useState(false);
  const target = useRef(null);
  const [loading, setLoading] = useState(false);

  const page = useRef(1);
  const index = useRef(0);

  useEffect(() => {
    observer.observe(target.current); // observer를 등록하는건 동일
  }, []);

  useEffect(() => {
    setInfinite([...filtered.slice(0, index.current + 10)]);
  }, [filtered]);

  function execute() {
    setLoading(true);
    if (index.current < filtered.length) {
      setInfinite([...filtered.slice(0, index.current + 10)]);
    }
    index.current += 10;
    setLoading(false);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (loading) return;
      execute();
      page.current += 1; // 이렇게 해줘야 page 숫자가 올라간다.
    });
  });

  function checkInputValues2() {
    setToastState(true);
  }

  const clickHandler = (type) => {
    if (type === "all") {
      setFiltered(products);
      return;
    }
    setFiltered(
      products.filter((elem) => {
        return elem.type === type;
      })
    );
  };

  return (
    <Container>
      <div style={{ height: "100px", backgroundColor: "white" }}></div>
      <Header />
      <TypeDiv>
        <ImageContainer onClick={() => clickHandler("all")}>
          <img src="/all.png" alt="all" />
          <P>전체</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Product")}>
          <img src="/product.png" alt="product" />
          <P>상품</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Category")}>
          <img src="/category.png" alt="category" />
          <P>카테고리</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Exhibition")}>
          <img src="/exhibition.png" alt="exhibition" />
          <P>기획전</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Brand")}>
          <img src="/brand.png" alt="brand" />
          <P>브랜드</P>
        </ImageContainer>
      </TypeDiv>
      <Products>
        {
          <>
            {infinite.map((elem) => {
              return (
                <DetailProduct
                  ids={ids}
                  setIds={setIds}
                  elem={elem}
                  key={elem.id}
                  bookMark={bookMark}
                  setBookMark={setBookMark}
                  setToastState={setToastState}
                  checkInputValues2={checkInputValues2}
                  setMessage={setMessage}
                ></DetailProduct>
              );
            })}
          </>
        }
      </Products>
      <Footer />
      {toastState === true ? (
        <Toast setToastState={setToastState} msg={message} />
      ) : null}
      <div
        id="scrollEnd"
        style={{ height: "20px", backgroundColor: "white" }}
        ref={target}
      ></div>
    </Container>
  );
}

export default ProductList;
