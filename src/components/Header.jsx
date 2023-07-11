import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import HeaderMenuNav from "./HeaderMenuNav";
const StyleHeader = styled.header`
  background: #fff;
  padding: 25px 76px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  .Header-logo {
    display: flex;
    flex: 1;

    h1 {
      margin-left: 12px;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 88.023%;
    }
  }
  button {
    width: 30px;
    height: 24px;
    flex-shrink: 0;
    background: #fff;
  }
`;

export default function Header() {
  const [isMenuShow, setisMenuShow] = useState(false);
  const menuToggleHandler = () => {
    setisMenuShow((pre) => !pre);
  };
  return (
    <StyleHeader>
      <div className="Header-logo">
        <Link to="/">
          <img src="/images/mainLogo.png" alt="MainLogo" />
        </Link>
        <h1>COZ Shopping</h1>
      </div>
      <button onClick={menuToggleHandler}>
        <img src="/images/HeaderButton.svg" alt="메뉴 리스트 토글 버튼" />
      </button>
      {isMenuShow ? <HeaderMenuNav menuToggleHandler={menuToggleHandler} /> : ""}
    </StyleHeader>
  );
}
