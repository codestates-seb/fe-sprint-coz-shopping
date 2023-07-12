import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const Dropdown = () => setIsOpen(!isOpen);

  return (
    <div id="Header-body">
      <Link to="/" id="Header-title">
        <img id="Header-logo" src="images/logo.png" alt="logo" />
        <span id="Header-name">COZ Shopping</span>
      </Link>
      <div id="Header-menu">
        <img
          id="Header-menu-icon"
          src="images/Button.png"
          alt="Button"
          onClick={Dropdown}
        />
        {isOpen && (
          <div id="Header-dropdown">
            <div id="Header-dropdown-title">OOO님, 안녕하세요!</div>
            <div id="Header-dropdown-product">
              <Link to="/products/list">상품리스트 페이지</Link>
            </div>
            <div id="Header-dropdown-bookmark">
              <Link to="/bookmark">북마크 페이지</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
