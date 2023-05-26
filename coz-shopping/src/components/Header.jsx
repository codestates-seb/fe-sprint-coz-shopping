import { Link } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

const CustomHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 9rem;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 8rem 0 0;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.2);

    >span {
        font-size: 3.5rem;
        font-weight: 700;
        margin-right: auto;
        margin-bottom: 0.3rem;
    }

    .logo>img {
        width: 7rem;
        height: 8rem;
        margin-right: 1.5rem;
        margin-left: 10rem;
    }
`

const Toggle = styled.button`
    cursor: pointer;
    padding-right: 3rem;
    
    >img {
        width: 4rem;
        padding: 1.2rem 0 0 0;
    }
`

const Modal = styled.div`
    position: fixed;
    top: 7rem;
    right: 13rem;
    display: flex;
    justify-content: right;

    >div {
        display: flex;
        text-align: center;
        position: absolute;
        flex-direction: column;
        justify-content: space-evenly;
        width: 27rem;
        height: 20rem;
        background-color: #ffffff;
        padding: 1.5rem;
        border-radius: 12px;
        filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3));
        >span {
            font-size: 2.3rem;
        }
        >a>img {
            width: 2.3rem;
        }
        >a>span {
            font-size: 2.3rem;
            padding: 0.5rem 0.7rem;
        }
    }

    
`

function Header() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };

    return (
        <CustomHeader className="header">
            <Link to="/" className="logo">
                <img src={process.env.PUBLIC_URL + 'images/icon/codestates_icon.svg'} alt="logo" />
            </Link>
            <span>COZ Shopping</span>
            <Toggle className="toggle" onClick={handleToggleOpen}>
                <img src={process.env.PUBLIC_URL + 'images/icon/toggle.svg'} alt="toggle-img" />
            </Toggle>
            {isToggleOpen ? (
                <Modal>
                    <div className="modal">
                        <span>OOO님 환영합니다.</span>
                        {/* 상품 리스트 걸기 */}
                        <Link to={'/products/list'} className="pd_list_icon">
                            <img src={process.env.PUBLIC_URL + 'images/icon/pd_list_icon.svg'} alt="toggle" />
                            <span>상품 리스트</span>
                        </Link>
                        {/* 북마크 리스트 걸기 */}
                        <Link to={'/bookmark'} className="pb_list_icon">
                            <img src={process.env.PUBLIC_URL + 'images/icon/pb_list_icon.svg'} alt="toggle" />
                            <span>북마크 리스트</span>
                        </Link>
                    </div>
                </Modal>
            ) : null}
        </CustomHeader>
    )
};

export default Header;