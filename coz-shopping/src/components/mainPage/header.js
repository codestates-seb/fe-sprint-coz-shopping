
import React from 'react';
import { useState } from 'react';
import HeaderModal from '../productModal/headerModal';
import { Link } from 'react-router-dom';




const Header = (props)=>{ //props.onClose
    const [modal, setModal] = useState(false)


    const modalHandler = () =>{
        setModal(!modal)
    }

    const CloseModalHandler = ()=>{
        setModal(false)
    }

    const portalElement = document.getElementById('overlays');
    return(
        <div className='header-container'>
            <div className='header-title-container'>
                <Link to="/"><img src={require('../../img/로고.png')} className='header-logo'></img></Link>
                <span className='header-title'>COZ shopping</span>
            </div>
            <div className='header-button-container'>
            <img src={require('../../img/햄버거 버튼.png')} onClick={modalHandler} ></img>
            </div>
            {modal? <HeaderModal modal={setModal} > </HeaderModal>:null}

        </div>
    )
}


export default Header