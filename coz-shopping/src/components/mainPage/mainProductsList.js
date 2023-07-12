import React from 'react';





const MainProductList = (props)=>{

    console.log(props.item[0])



    return(
        <div className='products-container'>

            <div className='product-list-container'>
                <h2>상품 리스트</h2>
                <div className='product-item-container'>
                    <ul>
                        <li>
                            <div className='product-item-img'>
                            <img src='img/Modal1.png'></img>
                            </div>
                            <div className='product-itme-content'>
                                <span></span>
                                <span>15%</span>
                            </div>
                            <div className='product-item-price'><span>12,900원</span></div>
                        </li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                    <ul>
                        <li>
                            <div className='product-item-img'>
                            <img src='img/Modal1.png'></img>
                            </div>
                            <div className='product-itme-content'>
                                <span>{}</span>
                                <span>15%</span>
                            </div>
                            <div className='product-item-price'><span>12,900원</span></div>
                        </li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>

                </div>
            </div>

            <div className='bookmark-list-container'>
                <h2>북마크 리스트</h2>
                <div className='bookmark-item-container'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>




        </div>
    )
}


export default MainProductList