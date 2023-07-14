import styled from "styled-components";
import { LinkStyle } from "./HeaderStyle";

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
      <LinkStyle to="/products/list">
        <Li>상품리스트 페이지</Li>
      </LinkStyle>
      <LinkStyle to="/bookmark">
        <Li>북마크 페이지</Li>
      </LinkStyle>
    </LiContainer>
  );
}

export default Dropdown;
