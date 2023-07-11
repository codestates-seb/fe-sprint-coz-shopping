import React from 'react';
// import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/로고.svg';
import { ReactComponent as Hambuger } from '../../assets/햄버거.svg';
const Header = (props) => {
  return (
    <header>
      <div className='logo'><Logo /></div>
      <div className='dropdown'><Hambuger /></div>
    </header>
  );
}

export default Header;