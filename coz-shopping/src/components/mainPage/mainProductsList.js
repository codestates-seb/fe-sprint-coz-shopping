import React from 'react';




const MainProductList = (props)=>{

 



    return(
        <div className='products-container'>

            <div className='product-list-container'>
                <h2>상품 리스트</h2>
                <div className='product-item-container'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>1</li>
                        <li>2</li>
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