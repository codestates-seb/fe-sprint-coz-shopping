import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import DetailProduct from "../components/DetailProduct";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  height: 100vh;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Bookmark() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        setList(
          res.data.filter((elem) => {
            return elem.type === "Product";
          })
        );
      });
  }, []);
  return (
    <Container>
      <Header />
      <div>
        <img src="/all.png" alt="all" />
        <img src="/product.png" alt="all" />
        <img src="/category.png" alt="all" />
        <img src="/exhibition.png" alt="all" />
        <img src="/brand.png" alt="all" />
      </div>
      <Products>
        {list.map((elem) => {
          return <DetailProduct elem={elem} key={elem.id}></DetailProduct>;
        })}
      </Products>
      <Footer />
    </Container>
  );
}

export default Bookmark;
