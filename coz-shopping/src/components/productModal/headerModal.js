import React from 'react';




const HeaderModal = ()=>{

    return(
        <div className='header-modal-container'>
            <div className='header-modal-name'>
                <span>OOO님, 안녕하세요!</span>
            </div>
            <div className='header-modal-productlist'>
                <img src='img/상품 아이콘.png'></img>
                <span>상품리스트 페이지</span>
            </div>
            <div className='header-modal-bookmark'>
                <img src='img/북마크 아이콘.png'></img>
                <span>북마크 페이지</span>
            </div>

        </div>
    )
}


export default HeaderModal