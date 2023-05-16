import logo from "../icon/로고.png";
import icon from "../icon/아이콘.png";

const Header = () => {
  const Dropdown = () => {
    return (
      <div className="dropdown">
        <li className="dropdown__welcome">○○○님, 안녕하세요</li>
        <li className="dropdown__list">상품리스트 페이지</li>
        <li className="dropdown__list">북마크</li>
      </div>
    );
  };

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <h1 className="header__shoppingMall">COZ Shopping</h1>
      <img className="header__menu" src={icon} alt="menu" />
      <Dropdown />
    </div>
  );
};

export default Header;
