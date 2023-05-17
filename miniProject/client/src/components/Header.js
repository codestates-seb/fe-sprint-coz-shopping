import React, { useState } from 'react';
import Dropdown from './Dropdown';

function Header(){

  const[View, setView] = useState(false);

    return (
     
      <header>
          <span className="mainTitle">
          <img className="logo" alt="logo" src="로고.png"/>
          <span className="mallName">COZ Shopping</span>
          </span>
       
          <button type='button' className='listButton' onClick={()=>{setView(!View)}}><img alt="icon" src="아이콘.png"/>{View && <Dropdown />}</button>
          
      </header>
    
    )
}

export default Header;