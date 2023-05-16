import { Link } from "react-router-dom";
import logo from "../icon/로고.png";
import iconMenu from "../icon/아이콘.png";
import iconProduct from "../icon/상품 아이콘.png";
import iconBookmark from "../icon/북마크 아이콘.png";

const Header = () => {
  const Dropdown = () => {
    return (
      <div className="dropdown">
        <div className="dropdown__welcome">○○○님, 안녕하세요</div>
        <Link className="dropdown__list" to="/products/list">
          <div>
            <img className="dropdown__icon" src={iconProduct} alt="icon" />
            상품리스트 페이지
          </div>
        </Link>
        <Link className="dropdown__list" to="/bookmark">
          <div>
            <img className="dropdown__icon" src={iconBookmark} alt="icon" />
            북마크 페이지
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="header">
      <Link className="header__moveMain" to="/">
        <img className="header__logo" src={logo} alt="logo" />
        <h1 className="header__shoppingMall">COZ Shopping</h1>
      </Link>
      <img className="header__menu" src={iconMenu} alt="menu" />
      <Dropdown />
    </div>
  );
};

export default Header;
