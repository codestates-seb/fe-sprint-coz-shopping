import React from 'react';
import Category from '../productList/category';
import CategoryList from '../productList/categoryList';







const BookMarkList = (props)=> {
    return (
        <div>
            <div className='category'>
                <div className='category-container'>
                    <div>
                        <img src={require('../../img/categoryIMG전체.png')}
                            id="All" 
                            onClick={''}></img>
                        <span>전체</span>
                    </div>
                    <div>
                        <img src={require('../../img/categoryIMG상품.png')} 
                            id="Product"
                            onClick={'categoryHandler'}></img>
                        <span>상품</span>
                    </div>
                    <div>
                        <img src={require('../../img/categoryIMG카테고리.png')} 
                            id="Category" 
                            onClick={'categoryHandler'}></img>
                        <span>카테고리</span>
                    </div>
                    <div>
                        <img src={require('../../img/categoryIMG기획전.png')} 
                            id="Exhibition"
                            onClick={'categoryHandler'}></img>
                        <span>기획전</span>
                    </div>
                    <div>
                        <img src={require('../../img/categoryIMG브랜드.png')} 
                            id="Brand"
                            onClick={'categoryHandler'}></img>
                        <span>브랜드</span>
                    </div>
                </div>
            </div>
            <CategoryList items={props.items} selectedCategory={props.selectedCategory} bookMarkHanler ={props.bookMarkHanler}></CategoryList>
        </div>    
    )
}



export default BookMarkList