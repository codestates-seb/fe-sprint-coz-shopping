import React from "react";
import Item from "../components/item";

const Main = ({productData}) =>{
    
    return (
        <div>
            <section><h3>상품페이지</h3><div id="itemlist--container">
                {productData.slice(0,4).map((el)=>{return(<Item el={el}></Item>);})}
                </div></section>
            <section><h3>북마크페이지</h3>
            <div id="bookmark--container"> {productData.filter((el)=>el.bookmark===true).slice(0,4).map((el)=>{return(<Item el={el}></Item>);})}</div></section>
        </div>
        
    )
}
export default Main;