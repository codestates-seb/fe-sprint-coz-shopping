import React from 'react';
import { Link } from 'react-router-dom';


const HeaderModal = (props)=>{


    const modalHandler = (e)=>{
        props.modal(!props.modal)
        props.categoryHandler(e)
        console.log(e.target.id)
    
    }



    return(
        <div className='header-modal-container'>
            <div className='header-modal-name'>
                <span>OOO님, 안녕하세요!</span>
            </div>

            <div className='header-modal-productlist' onClick={(e)=>{modalHandler(e)}}>
                <Link to="/products/list">
                    <img src={require('../../img/상품 아이콘.png')} id="All" ></img>
                    <span id="All">상품리스트 페이지</span>
                </Link>
            </div>

            
            <div className='header-modal-bookmark' id="BOOKMARK" onClick={(e)=>{modalHandler(e)}} >
                <Link to="/bookmark">
                    <img src={require('../../img/북마크 아이콘.png')} id="BOOKMARK"></img>
                    <span id="BOOKMARK">북마크 페이지</span>
                    {/* 위와 같은 상황에서 같은 id를 여러개 사용해도될까?  */}
                </Link>
            </div>

        </div>
    )
}


export default HeaderModal