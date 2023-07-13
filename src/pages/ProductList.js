import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import DetailProduct from "../components/DetailProduct";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

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

function ProductList({ bookMark, setBookMark, message, setMessage }) {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [toastState, setToastState] = useState(false);

  function checkInputValues2() {
    setToastState(!toastState);
  }

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        setList(res.data);
        setFiltered(res.data);
      });
  }, []);

  const clickHandler = (type) => {
    if (type === "all") {
      setFiltered(list);
      return;
    }
    setFiltered(
      list.filter((elem) => {
        return elem.type === type;
      })
    );
  };

  return (
    <Container>
      <Header />
      <TypeDiv>
        <ImageContainer onClick={() => clickHandler("all")}>
          <img src="/all.png" alt="all" />
          <P>전체</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Product")}>
          <img src="/product.png" alt="all" />
          <P>상품</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Category")}>
          <img src="/category.png" alt="all" />
          <P>카테고리</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Exhibition")}>
          <img src="/exhibition.png" alt="all" />
          <P>기획전</P>
        </ImageContainer>
        <ImageContainer onClick={() => clickHandler("Brand")}>
          <img src="/brand.png" alt="all" />
          <P>브랜드</P>
        </ImageContainer>
      </TypeDiv>
      <Products>
        {filtered.map((elem) => {
          return (
            <DetailProduct
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
      </Products>
      <Footer />
      {toastState === true ? (
        <Toast setToastState={setToastState} msg="북마크에 추가되었습니다." />
      ) : null}
    </Container>
  );
}

export default ProductList;
