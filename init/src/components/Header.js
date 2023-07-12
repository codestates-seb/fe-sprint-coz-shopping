import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: white;
  max-width: 2400px;
  top: 0;
  height: 80px;
  width: 100%;
  box-shadow: 0 7px 0 0 grey;
`;

const Container = styled.div`
  height: 80px;
`;

const LogoSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const ImgLogoCotainer = styled.div`
  margin-left: 76px;
  cursor: pointer;
`;

const HamburgerContainer = styled.div`
  margin-right: 76px;
`;

const Hamburger = styled.img`
  cursor: pointer;
`;

function Header() {
  const [view, setView] = useState(false);
  return (
    <Container>
      <HeadContainer>
        <ImgLogoCotainer>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src="logo.png" alt="logo" />
            <LogoSpan> COZ shopping </LogoSpan>
          </Link>
        </ImgLogoCotainer>
        <HamburgerContainer>
          <Hamburger
            src="hamburger.png"
            alt="hamburger"
            onClick={() => {
              setView(!view);
            }}
          />
          <ul>{view && <Dropdown />}</ul>
        </HamburgerContainer>
      </HeadContainer>
    </Container>
  );
}

export default Header;
