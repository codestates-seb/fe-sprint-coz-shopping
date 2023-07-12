import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 264px;
  height: 300px;
  margin: 0 24px;
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
`;

const TitleContainer = styled.div`
  display: flex;
  padding-top: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

const ProductImg = styled.img`
  width: 264px;
  height: 210px;
  border-radius: 10%;
  content: url(${(props) => props.url};);
  cursor: pointer;
`;

function DetailProduct({ elem, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = (event) => {
    // 모달창 오픈
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    switch (type) {
      case "Brand":
        break;
      case "Product":
        break;
      case "Exhibiton":
        break;
      default:
        break;
    }
  }, []);

  return (
    <Container>
      <ProductImg onClick={clickHandler} url={elem.image_url} />
      <PContainer>
        <TitleContainer>
          {elem.title ? <p>{elem.title}</p> : null}
        </TitleContainer>
        {elem.subtitle ? <p>{elem.subtitle}</p> : null}
        {elem.discountPercentage ? <p>{elem.discountPercentage}%</p> : null}
        {elem.discountPercentage ? <p>{elem.price}원</p> : null}
      </PContainer>
    </Container>
  );
}

export default DetailProduct;
