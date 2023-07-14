import React from 'react';



const CategoryList = (props) =>{


    console.log(props.selectedCategory)

    

    const filteredData = props.items.filter((el)=>{
        if(props.selectedCategory === 'All'){
            return props.items
        }else{
            return el.type === props.selectedCategory
        }
    })

    console.log(filteredData)

    // items={props.items} selectedCategory={props.selectedCategory} bookMarkHanler ={props.bookMarkHanler}
    return(
        <div className='category-list-container'>
                <div className='category-item-container'>
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
                </div>
        </div>
    )
}



export default CategoryList