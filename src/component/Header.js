import { Link } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="logo_box">
          <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <h2 className="shopping_mall_name">COZ Shopping</h2>
        </div>

        <label className="icon_box" onClick={toggleDropdown}>
          <img src="hamberger.png" alt="navimenu" />
        </label>
        {isOpen && <Dropdown />}
      </header>
    </>
  );
}

export default Header;
