import React,{useState, useEffect} from "react";
import Item from "../../components/item";
import './list.css';
import styled from 'styled-components';


function List({productData}) {
    
    const [dividedProduct, setdividedProduct]=useState([]);
    const [filteredProduct, setfilteredProduct]=useState(productData);
    const [isClicked, setIsCliked]=useState(1);   

    const StyledDiv = styled.div`    
    margin-top: 5px;
    text-align: center;        
    `;

    useEffect(()=>{const temp =[];
        console.log('www')
         for(let i = 0 ; i<filteredProduct.length; i+=4){
        temp.push(filteredProduct.slice(i,i+4));    
        }
        console.log(filteredProduct)
        return setdividedProduct(temp);        
    },[filteredProduct])

    const handleAllFilter=()=>{
        setIsCliked(1);
        setfilteredProduct(productData)        
    }

    const handleProductsFilter=()=>{  
        const pF= productData.filter((el)=>el.type==='Product');
        setIsCliked(2);
        setfilteredProduct(pF);           
    }
    const handleCategoryFilter=()=>{
        const pF= productData.filter((el)=>el.type==='Category');
        setIsCliked(3);
        setfilteredProduct(pF); 
    }
    const handleExhibitionFilter=()=>{
        const pF= productData.filter((el)=>el.type==='Exhibition');
        setIsCliked(4);
        setfilteredProduct(pF); 
    }
    const handleBrandFilter=()=>{
        const pF= productData.filter((el)=>el.type==='Brand');
        setIsCliked(5);
        setfilteredProduct(pF); 
    }

    const handleTest=()=>{
        console.log(dividedProduct)
    }



    return (        
        <div id="list--container">
            <section id="filter--list--container">
                <ul id='filter--container'>
                     <li className="filter"><img className="filter--img" src="../all.png" 
                      onClick={()=>handleAllFilter()} alt="전체"/><StyledDiv>전체</StyledDiv></li>
                      <li className="filter"><img className="filter--img" src="../products.png"
                      onClick={()=>handleProductsFilter()} alt="상품"/><StyledDiv>상품</StyledDiv></li>
                      <li className="filter"><img className="filter--img" src="../category.png" 
                      onClick={()=>handleCategoryFilter()} alt="카테고리"/><StyledDiv>카테고리</StyledDiv></li>
                     <li className="filter"><img className="filter--img" src="../exhibition.png" 
                      onClick={()=>handleExhibitionFilter()} alt="전시회"/><StyledDiv>전시회</StyledDiv> </li>
                     <li className="filter"><img className="filter--img" src="../brand.png"
                      onClick={()=>handleBrandFilter()} alt="브랜드"/><StyledDiv>브랜드</StyledDiv></li>
                </ul>
            </section>
            <section id="divided--item--list--container">            
                <div id="itemlist--container">
                    {
                        filteredProduct.map((el) => {
                            return (<Item el={el}></Item>);
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default List;