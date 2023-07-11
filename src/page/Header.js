import React, { useEffect, useState, useRef } from "react";
import logo from "../img/logo.png";
import nevMenu from "../img/햄버거 버튼.png";
import styled from "styled-components";
import { MdStarOutline, MdOutlineCardGiftcard } from "react-icons/md";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  > .logo {
    width: 55px;
    height: 30px;
    margin: 20px;
  }
  > .nevMenu {
    width: 34px;
    height: 24px;
    margin-left: auto;
    padding-right: 100px;
  }
  > div {
    font-size: 2rem;
    font-weight: 700;
    width: 300px;
  }
`;

const DropdownContainer = styled.section`
  position: relative;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (isOpen && !outsideRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [isOpen]);

  const clickMenuIcon = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <img className="logo" src={logo} alt="로고" />
      <div>COZ Shopping</div>
      <img
        className="nevMenu"
        src={nevMenu}
        alt="햄버거버튼"
        onClick={clickMenuIcon}
      />

      {isOpen && (
        <DropdownContainer ref={outsideRef}>
          <div className="dropDown-list">ooo님, 안녕하세요!</div>
          <Link className="dropDown-list" to="/productlist">
            <MdOutlineCardGiftcard className="dropDown-Icon" />
            <span>상품리스트 페이지</span>
          </Link>
          <Link className="dropDown-list" to="/bookmark">
            <MdStarOutline className="dropDownIcon" />
            <span>북마크 페이지</span>
          </Link>
        </DropdownContainer>
      )}
    </Container>
  );
};
export default Header;
