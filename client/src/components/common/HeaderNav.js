import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderNavContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 2.5rem;
  border: 1px solid gray;
  border-radius: 10px;

  li {
    text-align: center;
    padding: 0.7rem 1rem;
    border-bottom: 1px solid lightgray;
    list-style: none;
  }

  a {
    color: black;
  }
`;

const HeaderNav = (props) => {
  return (
    <HeaderNavContainer>
      <ul>
        <li>손영진님, 안녕하세요!</li>
        <li>
          <Link to="/products/list">상품리스트 페이지</Link>
        </li>
        <li>
          <Link to="/bookmark">북마크 페이지</Link>
        </li>
      </ul>
    </HeaderNavContainer>
  );
}

export default HeaderNav;