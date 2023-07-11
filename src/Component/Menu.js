import menu from "../assets/menu.png";
import productListIcon from "../assets/gift-icon.png";
import bookmarkIcon from "../assets/boomark-icon.png";
import styled from 'styled-components';

export default function Menu({ menuPopUp }) {
    return (
        <MenuBackground onClick={menuPopUp}>
            <MenuModal src={menu} />
            <MenuUser>재연님 안녕하세요!</MenuUser>
            <MenuProductList>
                <MenuIcon src={productListIcon}></MenuIcon>
                <MenuName className="menu__name">상품리스트 페이지</MenuName>
            </MenuProductList>
            <MenuBookmark>
                <MenuIcon src={bookmarkIcon}></MenuIcon>
                <MenuName className="menu__name">북마크 페이지</MenuName>
            </MenuBookmark>
        </MenuBackground>
    )
}


// styled-component
const MenuBackground = styled.div`
    position: absolute;
    background-color: transparent;
    width: 100vw;
    height: 100vh;
    font-size: 14px;
    z-index: 10;
`

const MenuModal = styled.img`
    position: absolute;
    width: 200px;
    height: 172px;
    top: 2.6rem;
    right: 2rem;
`

const MenuUser = styled.div `
    position: absolute;
    top: 5.1rem;
    right: 5rem;
`

const MenuSection = styled.div`
    width: 230px;
    height: 60px;
    display: flex;
    align-items: center;
`

const MenuProductList = styled(MenuSection)`
    position: absolute;
    top: 6.6rem;
    right: -2rem;
`

const MenuBookmark = styled(MenuSection)`
    position: absolute;
    top: 9.5rem;
    right: -2rem;
`

const MenuIcon = styled.img`
    width: 20px;
    height: 20px;
`

const MenuName = styled.span`
    margin-left: 8px;
`