import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css"

function Header() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={process.env.PUBLIC_URL + 'images/icon/codestates_icon.svg'} alt="logo" />
            </Link>
            <span>COZ Shopping</span>
            <div className="toggle-container">
                <button className="toggle" onClick={handleToggleOpen}>
                    <img src={process.env.PUBLIC_URL + 'images/icon/toggle.svg'} alt="toggle" />
                </button>
            </div>
            {isToggleOpen ? (
                <div className="modal-overlay">
                    <div className="modal">
                        <div>OOO님 환영합니다.</div>
                        {/* 상품 리스트 걸기 */}
                        <Link to={''} className="pd_list_icon">
                            <img src={process.env.PUBLIC_URL + 'images/icon/pd_list_icon.svg'} alt="toggle" />
                            <span>상품 리스트</span>
                        </Link>
                        {/* 북마크 리스트 걸기 */}
                        <Link to={''} className="pb_list_icon">
                            <img src={process.env.PUBLIC_URL + 'images/icon/pb_list_icon.svg'} alt="toggle" />
                            <span>북마크 리스트</span>
                        </Link>
                    </div>
                </div>
            ) : null}
        </header>
    )
};

export default Header;