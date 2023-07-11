import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as BurgerImg } from '../../assets/buger.svg';

/** Style */

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoTitle = styled.h1`
  padding: 0 1rem;
`;

/** Event Handler */


const Header = (props) => {
  const logoClickHandler = () => {
    window.location.href = '/';
  }

  const dropdownHandler = () => {

  }

  return (
    <HeaderContainer>
      <LogoContainer onClick={logoClickHandler}>
        <LogoImg />
        <LogoTitle>COZ Shopping</LogoTitle>
      </LogoContainer>
      <div className='dropdown' onClick={dropdownHandler}>
        <BurgerImg />
      </div>
    </HeaderContainer>
  );
}

export default Header;