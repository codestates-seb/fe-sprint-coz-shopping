import React from 'react';
import { useEffect, useRef } from 'react';


const CategoryList = (props) =>{


    console.log(props.target)
    
    // useEffect(() => {
    //     observer.observe(target.current);
    //   }, []);
    

    const options = {
        threshold: 1.0,
    }

    const addItemList = ()=>{
        console.log('실행됨')
    }

    const filteredData = props.items.filter((el)=>{
        if(props.selectedCategory === 'All'){
            return props.items
        }else if( props.selectedCategory === 'Product' ||
             props.selectedCategory === "Category" || 
             props.selectedCategory === "Exhibition" || 
             props.selectedCategory === "Brand"){
            return el.type === props.selectedCategory
        }else if(props.selectedCategory === "BOOKMARK"){
            return el.isBookMarked === true
        }
    })

    const observer = new IntersectionObserver(addItemList,options)

    console.log(filteredData)


    // items={props.items} selectedCategory={props.selectedCategory} bookMarkHanler ={props.bookMarkHanler}
    return(
        <div className='category-list-container'>  
        {/* category-list-container에 무한스크롤기능을 넣어야한다. */}
                <div className='category-item-container'ref={props.target} >
                {filteredData.map((el,idx)=>{
                    return(
                        <ul key={idx}>
                            <li>
                                <div className='category-item-img'>
                                <img src={!el.image_url ? el.brand_image_url : el.image_url}></img>
                                <div className='bookmark-on-off-container' onClick={()=>{props.bookMarkHandler(el.id)}}>
                                {
                                el.isBookMarked ? 
                                 <img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - on.png')}></img>
                                :<img className="bookmark-on-off" src={require('../../img/북마크 아이콘 - off.png')}></img> 
                                }
                                </div>
                                </div>
                                <div className='category-item-content'>
                                    <span className='category-item-content-title'>{el.title}</span>
                                    <span className='category-item-discount'>{!el.discountPercentage ? '-':`${el.discountPercentage}%`}</span>
                                </div>
                                <div className='category-item-price'><span>{!el.price?  ' ': `${el.price}원`}</span></div>
                            </li>

                        </ul>
                    )
                 })}
                 
                            <div className='scroll-container' ref={props.target} >
                                <h2></h2>
                            </div>


                </div>
        </div>
    )
}



export default CategoryList