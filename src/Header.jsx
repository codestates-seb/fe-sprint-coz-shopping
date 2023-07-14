import { useState } from "react";
import { styled } from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "./components/DropdownMenu";

const HeaderContainer = styled.header`
  width: 1280px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 8px 8px 0px #0000001a;

  span {
    font-size: 32px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
  img {
    width: 55px;
    height: 30px;
    margin-left: 76px;
    margin-right: 12px;
    filter: drop-shadow(0px 8px 8px 0px #0000001a);
  }
  .right {
    position: relative;
  }
  .right > .burger-icon {
    width: 34px;
    height: 24px;
    margin-right: 76px;
  }
  .right > .burger-icon:hover {
    cursor: pointer;
  }
`;

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const openDropdownMenu = () => {
    setIsVisible((isVisible) => !isVisible);
  };
  return (
    <HeaderContainer>
      <div className="left">
        <img src="img/logo.png" alt="logo"></img>
        <span className="header_title">COZ Shopping</span>
      </div>
      <div className="right">
        <FontAwesomeIcon
          icon={faBars}
          className="burger-icon"
          onClick={openDropdownMenu}
        />
        {isVisible ? <DropdownMenu /> : ""}
      </div>
    </HeaderContainer>
  );
}
export default Header;

/*
1. 햄버거 아이콘 클릭
2. 클릭 이벤트 발생
5.  
*/
