import React from 'react';
import { useState } from 'react';




const MainProductList = (props)=>{



    return(
        <div className='products-container'>

            <div className='product-list-container'>
                <h2>상품 리스트</h2>
                <div className='product-item-container'>
                {props.addedBookMark.map((el,idx)=>{
                    return(
                        <ul key={el.id}>
                            <li>
                                <div className='product-item-img'>
                                <img src={!el.image_url ? el.brand_image_url : el.image_url}></img>
                                <div className='bookmark-on-off-container' onClick={()=>{props.bookMarkHandler(el.id)}}>
                                {
                                el.isBookMarked ? 
                                 <img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - on.png')}></img>
                                :<img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - off.png')}></img> 
                                }
                                </div>
                                </div>
                                <div className='product-itme-content'>
                                    <span className='product-item-content-title'>{el.title}</span>
                                    <span className='product-item-discount' >{!el.discountPercentage ? '-':`${el.discountPercentage}%`}</span>
                                </div>
                                <div className='product-item-price'><span>{!el.price?  ' ': `${el.price}원`}</span></div>
                            </li>
                        </ul>
                    )
                 })}
                    
                </div>
            </div>

            <div className='bookmark-list-container'>
                <h2>북마크 리스트</h2>
                <div className='bookmark-item-container'>
                {props.addedBookMark.map((el,idx)=>{
                    return(
                        <ul key={idx}>
                            <li>
                                <div className='bookmark-item-img'>
                                <img src={!el.image_url ? el.brand_image_url : el.image_url}></img>
                                <div className='bookmark-on-off-container' onClick={()=>{props.bookMarkHandler(el.id)}}>
                                {
                                el.isBookMarked ? 
                                 <img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - on.png')}></img>
                                :<img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - off.png')}></img> 
                                }
                                </div>
                                </div>
                                <div className='bookmark-item-content'>
                                    <span className='bookmark-item-content-title'>{el.title}</span>
                                    <span className='bookmark-item-discount'>{!el.discountPercentage ? '-':`${el.discountPercentage}%`}</span>
                                </div>
                                <div className='bookmark-item-price'><span>{!el.price?  ' ': `${el.price}원`}</span></div>
                            </li>
                        </ul>
                    )
                 })}
                </div>
            </div>




        </div>
    )
}


export default MainProductList