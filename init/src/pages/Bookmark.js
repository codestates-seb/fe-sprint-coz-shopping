import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import DetailProduct from "../components/DetailProduct";
import { useState, useEffect, useRef } from "react";
import {
  Container,
  ImageContainer,
  Products,
  TypeDiv,
  P,
  UpDiv,
  DownDiv,
} from "./BookmarkStyle";

function Bookmark({ bookMark, setBookMark, setMessage, message, ids, setIds }) {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState(bookMark);
  const [empty, setEmpty] = useState(false);
  const [stars, setStars] = useState(false);
  const [toastState, setToastState] = useState(false);
  const [infinite, setInfinite] = useState([]);
  const [loading, setLoading] = useState(false);

  const target = useRef(null);
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

  function toastSet() {
    setToastState(true);
  }

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
      <UpDiv></UpDiv>
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
          infinite.map((elem) => {
            return (
              <DetailProduct
                ids={ids}
                setIds={setIds}
                elem={elem}
                key={elem.id}
                bookMark={bookMark}
                setBookMark={setBookMark}
                stars={stars}
                setStars={setStars}
                setMessage={setMessage}
                toastSet={toastSet}
                setToastState={setToastState}
              ></DetailProduct>
            );
          })}
      </Products>
      <Footer />
      {toastState === true ? (
        <Toast setToastState={setToastState} msg={message} />
      ) : null}
      <DownDiv ref={target}></DownDiv>
    </Container>
  );
}

export default Bookmark;
