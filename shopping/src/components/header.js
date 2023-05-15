import logo from "../img/로고.svg";
import logo2 from "../img/햄버거 버튼.svg";

const Header = function Header() {
  return (
    <div className="header">
      <div className="header-2">
        <img src={logo} alt="" className="img" />
        <span className="navtitle">COZ Shopping</span>
      </div>
      <img src={logo2} alt="" className="img2" />
    </div>
  );
};

export default Header;
