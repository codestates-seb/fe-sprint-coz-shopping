
import React from 'react';




const Header = ()=>{
    return(
        <div className='header-container'>
            <div className='header-title-container'>
                <img src='img/로고.png' className='header-logo'></img>
                <span className='header-title'>COZ shopping</span>
            </div>
            <div className='header-button-container'>
            <img src='img/햄버거 버튼.png'></img>
            </div>
        </div>
    )
}


export default Header