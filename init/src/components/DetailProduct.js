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
  padding-top: 5px;
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

const ProductImg2 = styled.img`
  width: 264px;
  height: 210px;
  border-radius: 10%;
  content: url(${(props) => props.url2};);
  cursor: pointer;
`;

const BlueP = styled.p`
  color: blue;
`;

function DetailProduct({ elem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const clickHandler = (event) => {
    setIsOpen(!isOpen);
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
      <ProductImg
        onClick={clickHandler}
        url={elem.image_url ? elem.image_url : elem.brand_image_url}
      />
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
