import { React, useState } from 'react';
import './header.css';
import logo from '../img/logo.png';
import menu from '../img/ion_menu.png';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  function menuopen() {
    if (navOpen === true){
      setNavOpen(false);
    }else{
      setNavOpen(true);
    }
  }

  return (
    <header>
      <div className='logo_h1_container'>
          <Link to='/'><img className='logo' src={logo} alt='로고'></img></Link>
          <Link to='/'><h1>COZ Shopping</h1></Link>
      </div>
      <nav>
        <img className='menu' src={menu} alt='menu' onClick={menuopen}></img>
        <ul className={navOpen ? 'menu_nav':'menu_nav_none'}>
          <li className='menu_nav_li' id='menu_top'>
            ooo님, 안녕하세요!
          </li>
          <li className='menu_nav_li' id='menu_mid'>
            <Link to='/products/List'>🎁상품리스트 페이지</Link>
          </li>
          <li className='menu_nav_li' id='menu_bottom'>
            <Link to='/bookmark'>⭐️북마크 페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}