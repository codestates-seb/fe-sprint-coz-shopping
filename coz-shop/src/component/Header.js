import { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    const [burger, setBurger] = useState(false);

    const handleHamburgerClick = () => {
        const burgerList = document.querySelector('.hamburger-list-container');

        if(burger){
            burgerList.classList.add('hamburger-none');
        } else {
            burgerList.classList.remove('hamburger-none');
        }
        setBurger(!burger);
    }

    return (
        <header className="header-container">
            <div className="logo-container">
                <Link to="/"><img src="/image_component/logo.png" alt="logo" /></Link>
                <span className='logo-title'>COZ Shopping</span>
            </div>
            <div className="hamburger-container">
                <img src="/image_component/hamburger.png" alt="hamburger"
                    onClick={()=>handleHamburgerClick()}
                />
                <nav className="hamburger-list-container hamburger-none">
                    <div className="hamburger-list-head"></div>
                    <div className="hamburger-list">
                        <div className="customer-name">권순범님, 안녕하세요!</div>
                        <Link to="/products/list"><div className="page-button">🎁상품리스트 페이지</div></Link>
                        <Link to="/bookmark"><div className="page-button">⭐북마크 페이지</div></Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}