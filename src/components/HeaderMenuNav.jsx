import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineGift, AiOutlineStar } from "react-icons/ai";

const HeaderMenuNavContainer = styled.nav`
  position: absolute;
  right: 32px;
  top: 70px;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  z-index: 10;

  .triangle {
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    top: -8px;
    right: 49px;
    box-shadow: -1px -1px 1px 0 rgba(0, 0, 0, 0.03);
    background-color: white;
    position: absolute;
  }

  ul.item-list {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 150px;
    border-radius: 12px;
  }

  li.item,
  li.userInfo {
    padding-left: 24px;
    height: calc(150px / 3);
    line-height: calc(150px / 3);
    display: flex;
    justify-content: flex-start;
    gap: 8px;
  }

  li.userInfo {
    padding-left: 0;
    justify-content: center;
  }

  li.item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .item a {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

const Triangle = styled.div`
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  top: -8px;
  right: 49px;
  box-shadow: -1px -1px 1px 0 rgba(0, 0, 0, 0.03);
  background-color: white;
  position: absolute;
`;

const ItemList = styled.div`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 150px;
  border-radius: 12px;
  div {
    height: calc(150px / 3);
    display: flex;
    align-items: center;
  }
`;

const UserInfo = styled.div`
  padding-left: 0;
  justify-content: center;
`;

const Item = styled.div`
  padding-left: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 4px;
`;

export default function HeaderMenuNav({ menuToggleHandler }) {
  return (
    <HeaderMenuNavContainer>
      <Triangle />
      <ItemList>
        <UserInfo>OOO님, 안녕하세요</UserInfo>
        <Link to="/products/list" onClick={menuToggleHandler}>
          <Item>
            <AiOutlineGift size={20} /> <span>상품리스트 페이지</span>
          </Item>
        </Link>
        <Link to="/bookmark" onClick={menuToggleHandler}>
          <Item>
            <AiOutlineStar size={20} /> <span>북마크 페이지</span>
          </Item>
        </Link>
      </ItemList>
    </HeaderMenuNavContainer>
  );
}
