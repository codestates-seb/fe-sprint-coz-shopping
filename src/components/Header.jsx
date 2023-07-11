import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <nav>
      <div className="nav__items">
        <div className="nav__logo">
          <img src="imges" alt="codestates logo" />
          <h1>Codestates</h1>
        </div>
        <div className="nav__toggle">
          <div>Burger</div>
        </div>
      </div>
    </nav>
  );
};
