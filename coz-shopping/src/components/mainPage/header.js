
import React from 'react';
import { useState } from 'react';
import HeaderModal from '../productModal/headerModal';



const Header = ()=>{
    const [modal, setModal] = useState(false);

    const modalHandler = ()=>{
        setModal(!modal)
    }

    return(
        <div className='header-container'>
            <div className='header-title-container'>
                <img src='img/로고.png' className='header-logo'></img>
                <span className='header-title'>COZ shopping</span>
            </div>
            <div className='header-button-container'>
            <img src='img/햄버거 버튼.png' onClick={modalHandler}></img>
            </div>
            {modal ? <HeaderModal></HeaderModal> : null}
        </div>
    )
}


export default Header