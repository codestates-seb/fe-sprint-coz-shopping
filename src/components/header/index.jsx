import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Menu, Title } from "./style";

import logoImage from "asset/logo.png";
import hamburgerBtn from "asset/hamburger_button.png";
import productIcon from "asset/product_icon.png";
import BookmarkIcon from "asset/bookmark_icon.png";

function Header() {
  const [isActive, setActive] = useState(false);
  return (
    <Container
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <header>
        <Link to="/">
          <Title>
            <img src={logoImage} alt="codestates logo" />
            <h1>COZ Shopping</h1>
          </Title>
        </Link>
        <div>
          {isActive ? (
            <Menu>
              <div>
                <a>OOO님, 안녕하세요!</a>
              </div>
              <div>
                <Link to="/products/list">
                  <img src={productIcon} alt="" />
                  상품리스트 페이지
                </Link>
              </div>
              <div>
                <Link to="/bookmark">
                  <img src={BookmarkIcon} alt="" />
                  북마크 페이지
                </Link>
              </div>
            </Menu>
          ) : null}
          <img
            src={hamburgerBtn}
            alt="hamburger button"
            onClick={() => {
              setActive(true);
            }}
          />
        </div>
      </header>
    </Container>
  );
}

export default Header;
