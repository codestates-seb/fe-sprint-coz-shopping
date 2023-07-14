import React from 'react';
import { Link } from 'react-router-dom';


const HeaderModal = (props)=>{


    const modalHandler = ()=>{
        props.modal(!props.modal)
    }

    return(
        <div className='header-modal-container'>
            <div className='header-modal-name'>
                <span>OOO님, 안녕하세요!</span>
            </div>

            <div className='header-modal-productlist' onClick={modalHandler}>
                <Link to="/products/list">
                    <img src={require('../../img/상품 아이콘.png')}></img>
                    <span>상품리스트 페이지</span>
                </Link>
            </div>

            
            <div className='header-modal-bookmark' onClick={modalHandler}>
                <Link to="/bookmark">
                    <img src={require('../../img/북마크 아이콘.png')}></img>
                    <span>북마크 페이지</span>
                </Link>
            </div>

        </div>
    )
}


export default HeaderModal