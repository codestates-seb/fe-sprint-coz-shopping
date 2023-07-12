
import "./Header.css";
import { useState } from "react";

export default function Header() {

    const handleLogoClick = () => {
        window.location.href = '/';
    };

    const handleProductClick = () => {
        window.location.href = '/products/list';
    };

    const handleBookmarkClick = () => {
        window.location.href = '/bookmark';
    };

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleHamburgerClick = () => {
        setDropdownVisible(!dropdownVisible);
    };


    return (
        <div>
            <header className="header">
                <img id="cozlogo" src="codestatelogo.png" alt="logo" onClick={handleLogoClick}></img>
                <span id="cozname" onClick={handleLogoClick}>COZ Shopping</span>
                <img className="hamburger" src="hamburger.png" alt="hamburger button" onClick={handleHamburgerClick}></img>
                {dropdownVisible && (
                    <div>
                        
                        <div id="dropdown_box">
                        <img id="polygon" src="Polygon.png" alt="" ></img>
                            <div className="dropdown-menu">OOO님, 안녕하세요!</div>
                            <div className="dropdown-menu" onClick={handleProductClick}><img src="producticon.png" alt="" ></img>상품리스트 페이지</div>
                            <div className="dropdown-menu" onClick={handleBookmarkClick}><img src="bookmarkicon.png" alt="" ></img>북마크 페이지</div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

