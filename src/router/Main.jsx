import Card from "../components/Card";
import Loding from "../components/Loding";
import { useSelector } from "react-redux";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 12px;
`;

const Section = styled.section`
  display: "flex";
  margin: auto;
  justify-content: "center";
  align-items: "center";
  margin-top: 12px;
  margin-left: 76px;
  margin-right: 76px;
`;
export default function Main() {
  const isLoding = useSelector((state) => state.Loding.value);
  const AllProducts = useSelector((state) => state.AllProducts.value);
  return (
    <>
      {isLoding ? (
        <Loding />
      ) : (
        <>
          <Section>
            <H2>상품 리스트</H2>
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card item={AllProducts.find((el) => el.type === "Product")} />
              <Card item={AllProducts.find((el) => el.type === "Category")} />
              <Card item={AllProducts.find((el) => el.type === "Exhibition")} />
              <Card item={AllProducts.find((el) => el.type === "Brand")} />
            </div>
          </Section>
          <Section>
            <H2>북마크 리스트</H2>
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {AllProducts.filter((el) => el.bookmark === true).length > 0 ? (
                AllProducts.filter((el) => el.bookmark === true)
                  .slice(0, 4)
                  .map((el) => <Card item={el} />)
              ) : (
                <div>
                  <h3>현재 북마크 리스트가 없습니다.</h3>
                </div>
              )}
            </div>
          </Section>
        </>
      )}
    </>
  );
}
