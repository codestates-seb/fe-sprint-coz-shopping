import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa6";

export const Header = () => {
  return (
    <nav>
      <div className="nav__items">
        <div className="nav__logo">
          <img src="imges" alt="codestates logo" />
          <h1>COZ Shopping</h1>
        </div>
        <div className="nav__toggle">
          <FaBars size={34} />
          <ul className="toggle__list">
            <li className="toggle__list__item">이지원님, 안녕하세요!</li>
            <li className="toggle__list__item" id="item__middle">
              상품리스트 패이지
            </li>
            <li className="toggle__list__item">북마크 페이지</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
