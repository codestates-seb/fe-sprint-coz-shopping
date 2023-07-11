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
        </div>
      </div>
    </nav>
  );
};
