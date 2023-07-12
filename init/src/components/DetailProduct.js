import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 264px;
  height: 300px;
  margin: 0 24px;
  position: relative;
`;

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 100%;
  font-size: 0.9rem;
  font-weight: bold;
  height: 54px;
  position: absolute;
  top: 85%;
`;

const TitleContainer = styled.div`
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

const ImageCotainer = styled.div`
  position: absolute;
`;

const StarContainer = styled.div`
  position: absolute;
  top: 80%;
  left: 85%;
`;

const ProductImg = styled.img`
  width: 264px;
  height: 210px;
  border-radius: 10%;
  content: url(${(props) => props.url};);
  cursor: pointer;
`;
const BlueP = styled.p`
  color: blue;
`;
const StarImg = styled.img`
  cursor: pointer;
  position: absolute;
`;

function DetailProduct({ elem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [bookMark, setBookMark] = useState(false);
  const clickHandler = (event) => {
    setIsOpen(!isOpen);
  };
  const bookMarkClickHandler = (event) => {
    setBookMark(!bookMark);
  };

  useEffect(() => {
    switch (elem.type) {
      case "Brand":
        setFirst(elem.brand_name);
        setSecond("관심고객 수 " + elem.follower);
        break;
      case "Product":
        setFirst(elem.title);
        setSecond(elem.discountPercentage + "%");
        setThird(elem.price + "원");
        break;
      case "Exhibiton":
        setFirst(elem.title);
        setSecond(elem.subtitle);
        break;
      default:
        setFirst("#" + elem.title);
        break;
    }
  }, []);

  return (
    <Container>
      {isOpen ? (
        <Modal
          url={elem.image_url}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          url2={elem.brand_image_url}
        />
      ) : null}
      <ImageCotainer>
        <ProductImg
          onClick={clickHandler}
          url={elem.image_url ? elem.image_url : elem.brand_image_url}
        />
        <StarContainer>
          {bookMark && (
            <StarImg
              src="/bookmark.png"
              alt="bookmark"
              onClick={bookMarkClickHandler}
            />
          )}
          {!bookMark && (
            <StarImg
              src="/bookmarkYellow.png"
              alt="bookmark"
              onClick={bookMarkClickHandler}
            />
          )}
        </StarContainer>
      </ImageCotainer>

      <PContainer>
        <TitleContainer>{first ? <p>{first}</p> : null}</TitleContainer>
        {second ? <p>{second}</p> : null}
        {third ? (
          elem.discountPercentage ? (
            <BlueP>{third}</BlueP>
          ) : (
            <p>{third}</p>
          )
        ) : null}
      </PContainer>
    </Container>
  );
}

export default DetailProduct;
