import React,{useState, useEffect} from "react";
import Item from "../../components/item";
import './list.css';
import styled from 'styled-components';


function List({productData}) {
    
    const [filteredProduct, setfilteredProduct]=useState(productData);   


    const StyledDiv = styled.div`    
    margin-top: 5px;
    text-align: center;        
    `;


    const handleAllFilter=()=>{
        setfilteredProduct(productData)        
    }

    const handleProductsFilter=()=>{  
        const pF= productData.filter((el)=>el.type==='Product');
        setfilteredProduct(pF);           
    }
    const handleCategoryFilter=()=>{
        const pF= productData.filter((el)=>el.type==='Category');
        setfilteredProduct(pF); 
    }
    const handleExhibitionFilter=()=>{
        const pF= productData.filter((el)=>el.type==='Exhibition');
        setfilteredProduct(pF); 
    }
    const handleBrandFilter=()=>{
        const pF= productData.filter((el)=>el.type==='Brand');
        setfilteredProduct(pF); 
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