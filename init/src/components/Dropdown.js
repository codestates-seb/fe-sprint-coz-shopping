import styled from "styled-components";
import { Link } from "react-router-dom";

const LiContainer = styled.div`
  z-index: 1;
  box-shadow: 0 7px 7px 0 grey;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
`;

function Dropdown() {
  return (
    <LiContainer>
      <Li>이용혁님 환영합니다</Li>
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
