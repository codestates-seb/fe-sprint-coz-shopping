import LogoImg from '../images/Logo.png';
import HambergerImg from '../images/Hamberger.png';
import BookIcon from '../images/북마크 아이콘.png';
import GoodsIcon from '../images/상품 아이콘.png';
import "./Header.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isDropdown, setisDropdown] = useState(false);

    const dropdownMenuHandler = () => {
        setisDropdown(!isDropdown);
    };

    const navigate = useNavigate()
    return (

        <header className="header-container">

            <div onClick={() => { navigate('/') }}>
                <img src={LogoImg} alt="logo" />
                <span className="logo-title">Coz Shopping</span>
            </div>

            <img src={HambergerImg} alt="hamberger" onClick={dropdownMenuHandler} />
            {isDropdown && (
                <div className="dropdown-menu">
                    <ul>
                        <li>ooo님, 안녕하세요!</li>
                        <li onClick={() => { navigate('/shopitemlist') }}><img src={GoodsIcon} alt="logo" />상품리스트 페이지</li>
                        <li onClick={() => { navigate('/bookmarker') }} ><img src={BookIcon} alt="logo" />북마크 페이지</li>
                    </ul>
                </div>
            )}

        </header>

    );
}