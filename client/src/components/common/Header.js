import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as BurgerImg } from '../../assets/burger.svg';
import HeaderNav from './HeaderNav';

/** Style */

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  color: black;
  background-color: white;

  .logo-container {
    color: black;
    display: flex;
    flex-direction: row;
  }

  .logo-title {
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
  }
`;

const Header = (props) => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const dropdownHandler = () => {
    setDropdownShow(!dropdownShow);
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <div className='logo-container'>
          <LogoImg />
          <h1 className='logo-title'>COZ Shopping</h1>
        </div>
      </Link>
      <div className='dropdown' onClick={dropdownHandler}>
        <BurgerImg />
        {dropdownShow ? <HeaderNav /> : ''}
      </div>
    </HeaderContainer>
  );
}

export default Header;