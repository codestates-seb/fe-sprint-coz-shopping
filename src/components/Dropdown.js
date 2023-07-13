import styled from "styled-components";
import { Link } from "react-router-dom";

const LiContainer = styled.div`
  z-index: 1;
  box-shadow: 0 7px 7px 0 grey;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 2%;
  background-color: white;
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
  border: 1px solid grey;
`;

function Dropdown() {
  return (
    <LiContainer>
      <Li>이용혁님 안녕하세요!</Li>
      <Link
        to="/products/list"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Li>상품리스트 페이지</Li>
      </Link>
      <Link to="/bookmark" style={{ textDecoration: "none", color: "black" }}>
        <Li>북마크 페이지</Li>
      </Link>
    </LiContainer>
  );
}

export default Dropdown;
