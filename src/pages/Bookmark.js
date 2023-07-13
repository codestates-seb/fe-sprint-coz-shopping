import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import DetailProduct from "../components/DetailProduct";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  height: 100vh;
`;

const ImageContainer = styled.div`
  margin-right: 23px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
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

function Bookmark({ bookMark, setBookMark }) {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [stars, setStars] = useState(false);

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

  useEffect(() => {
    setStars(true);
    if (bookMark.length === 0) {
      setEmpty(true);
    } else {
      setList(bookMark);
      setFiltered(bookMark);
    }
  }, [bookMark]);

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
        {!empty &&
          filtered.map((elem) => {
            return (
              <DetailProduct
                elem={elem}
                key={elem.id}
                bookMark={bookMark}
                setBookMark={setBookMark}
                stars={stars}
                setStars={setStars}
              ></DetailProduct>
            );
          })}
      </Products>
      <Footer />
    </Container>
  );
}

export default Bookmark;
