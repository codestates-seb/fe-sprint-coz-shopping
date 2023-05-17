import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Ul = styled.ul`
    right: 0;
    margin: 1.5rem;
    font-weight: 400;
    position: fixed;
    list-style: none;
    text-align: left;
   
   
`
const Li = styled.li `
padding: 3px;
border: 1px solid black;
border-bottom: 0px;
`
const LastLi = styled.li `
padding: 3px;
border: 1px solid black;
`


function Dropdown(){
    let navigate = useNavigate()
    return(
        
            <Ul>
                <Li>OOO님, 안녕하세요!</Li>
                <Li onClick={()=>{navigate('/products/list')}}><img src="상품 아이콘.png"/>상품리스트 페이지</Li>
                <LastLi onClick={()=>{navigate('/bookmark')}}><img src="북마크 아이콘.png"/>북마크 페이지</LastLi>
            </Ul>
            
    
       
    )
}
export default Dropdown;


  
