import { Link } from 'react-router-dom';
import menu from "../assets/menu.png";
import productListIcon from "../assets/gift-icon.png";
import bookmarkIcon from "../assets/boomark-icon.png";
import styled from 'styled-components';

export default function Menu({ menuPopUp }) {
    function stopEvent(e) {
        e.stopPropagation();
    }

    return (
        <MenuBackground onClick={menuPopUp}>
            <MenuBox onClick={(e) => stopEvent(e)}>
                <MenuModal src={menu} />
                <MenuContents>
                    <MenuUser>메뉴를 선택해주세요.</MenuUser>
                    <RouterLink to="/products/list">
                        <MenuProductList>
                            <MenuIcon src={productListIcon}></MenuIcon>
                            <MenuName className="menu__name">상품리스트 페이지</MenuName>
                        </MenuProductList>
                    </RouterLink>
                    <RouterLink to="/bookmark">
                        <MenuBookmark>
                            <MenuIcon src={bookmarkIcon}></MenuIcon>
                            <MenuName className="menu__name">북마크 페이지</MenuName>
                        </MenuBookmark>
                    </RouterLink>
                </MenuContents>
            </MenuBox>
        </MenuBackground>
    )
}


// styled-components
const MenuBackground = styled.div`
    position: absolute;
    background-color: transparent;
    width: 100vw;
    height: 100vh;
    font-size: 14px;
    z-index: 100;
`

const MenuBox = styled.div`
    position: sticky;
    top: 2.9rem;
    right: 2rem;
`

const MenuContents = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 1.7rem;
    right: 2.5rem;
`

const MenuModal = styled.img`
    position: absolute;
    width: 200px;
    height: 172px;
    top: 0.1rem;
    right: 2rem;
`

const MenuSection = styled.div`
    width: 185px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color: rgb(239, 239, 239);
    }
`

const MenuUser = styled(MenuSection)`
    cursor: default;
    &:hover{
        background-color: transparent;
    }
`

const MenuProductList = styled(MenuSection)`
    top: 7.3467rem;
    right: 2.43rem;
`

const MenuBookmark = styled(MenuSection)`
    top: 10.253rem;
    right: 2.4rem;
    border-radius: 0 0 10px 10px;
    padding-right: 23px;
    box-sizing: border-box;
`

const MenuIcon = styled.img`
    width: 20px;
    height: 20px;
`

const MenuName = styled.span`
    margin-left: 8px;
`

const RouterLink = styled(Link)`
    text-decoration: none;
    color: black;
`
