import { Link } from "react-router-dom";
import logo from "../icon/로고.png";
import iconMenu from "../icon/아이콘.png";
import iconProduct from "../icon/상품 아이콘.png";
import iconBookmark from "../icon/북마크 아이콘.png";
import { useState } from "react";
import "../components/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  const Dropdown = () => {
    return (
      <div className="dropdown">
        <div className="dropdown__welcome">
          <div className="dropdown__text">○○○님, 안녕하세요</div>
        </div>
        <div className="dropdown__list">
          <Link className="dropdown__nav" to="/products/list" style={{ textDecoration: "none" }}>
            <div className="dropdonw__text">
              <img className="dropdown__icon" src={iconProduct} alt="icon" />
              상품리스트
            </div>
          </Link>
        </div>
        <div className="dropdown__list">
          <Link className="dropdown__nav" to="/bookmark" style={{ textDecoration: "none" }}>
            <div className="dropdonw__text">
              <img className="dropdown__icon" src={iconBookmark} alt="icon" />
              북마크
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="header">
      <Link className="header__moveMain" to="/" style={{ textDecoration: "none" }}>
        <img className="header__logo" src={logo} alt="logo" />
        <h1 className="header__shoppingMall">COZ Shopping</h1>
      </Link>
      <img className="header__menu" src={iconMenu} alt="menu" onClick={handleMenu} />
      {isOpen && <Dropdown />}
    </div>
  );
};

export default Header;
