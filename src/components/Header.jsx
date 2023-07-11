import "./header.css";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav>
      <div className="nav__items">
        <div className="nav__logo">
          <img src="imges" alt="codestates logo" />
          <h1>COZ Shopping</h1>
        </div>
        <div className="nav__toggle">
          <FaBars
            size={34}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {isDropdownOpen && (
            <div
              className="toggle__list"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/" className="toggle__list__item">
                이지원님, 안녕하세요!
              </Link>
              <Link
                to="/products"
                className="toggle__list__item"
                id="item__middle"
              >
                상품리스트 패이지
              </Link>
              <Link to="/bookmarks" className="toggle__list__item">
                북마크 페이지
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
