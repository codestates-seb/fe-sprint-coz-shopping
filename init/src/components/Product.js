import DetailProduct from "./DetailProduct";
import styled from "styled-components";

const ProdContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Product({
  bookMark,
  setBookMark,
  checkInputValues,
  setMessage,
  products,
  booked,
  ids,
  setIds,
}) {
  return (
    <>
      <ProdContainer>
        {!booked
          ? products.slice(0, 4).map((elem) => {
              return (
                <DetailProduct
                  ids={ids}
                  setIds={setIds}
                  key={elem.id}
                  elem={elem}
                  bookMark={bookMark}
                  setBookMark={setBookMark}
                  checkInputValues={checkInputValues}
                  setMessage={setMessage}
                />
              );
            })
          : bookMark.slice(0, 4).map((elem) => {
              return (
                <DetailProduct
                  ids={ids}
                  setIds={setIds}
                  key={elem.id}
                  elem={elem}
                  bookMark={bookMark}
                  setBookMark={setBookMark}
                  checkInputValues={checkInputValues}
                  setMessage={setMessage}
                />
              );
            })}
      </ProdContainer>
    </>
  );
}

export default Product;
