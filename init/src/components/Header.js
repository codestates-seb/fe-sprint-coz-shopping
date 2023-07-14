import {
  HeadContainer,
  Container,
  LogoSpan,
  ImgLogoCotainer,
  HamburgerContainer,
  Hamburger,
  LinkStyle,
} from "./HeaderStyle";

import Dropdown from "./Dropdown";
import { useState } from "react";

function Header() {
  const [view, setView] = useState(false);
  return (
    <Container>
      <HeadContainer>
        <ImgLogoCotainer>
          <LinkStyle to="/">
            <img src="/logo.png" alt="logo" />
            <LogoSpan> COZ shopping </LogoSpan>
          </LinkStyle>
        </ImgLogoCotainer>
        <HamburgerContainer>
          <Hamburger
            src="/hamburger.png"
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
