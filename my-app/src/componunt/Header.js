import LogoImg from '../images/Logo.png';
import HambergerImg from '../images/Hamberger.png';
import BookIcon from '../images/북마크 아이콘.png';
import GoodsIcon from '../images/상품 아이콘.png';
import "./Header.css";
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';




export default function Header() {
    const [isDropdown, setisDropdown] = useState(false);

    const dropdownMenuHandler = () => {
        setisDropdown(!isDropdown);
    };

    return (
        <Router>
        <header className="header-container">
            
            <div>
                <Link to = '/'><img src={LogoImg} alt="logo" /></Link>
                <span className="logo-title">Coz Shopping</span>
            </div>
            
            <img src={HambergerImg} alt="hamberger" onClick={dropdownMenuHandler} />
            {isDropdown && (
                <div className="dropdown-menu">
                    {<ul>
                        <li>ooo님, 안녕하세요!</li>
                        <li><img src={GoodsIcon} alt="logo" /><Link to = "">상품리스트 페이지</Link></li>
                        <li><img src={BookIcon} alt="logo" /><Link to = "">북마크 페이지</Link></li>
                    </ul>}
                </div>
            )}
        </header>
        </Router>
    );
}