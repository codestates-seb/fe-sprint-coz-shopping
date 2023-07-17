import React from "react";
import Item from "../components/item";
import List from "./product/list";

function Bookmark({productData}){    
    
    return(
        <section>
            <h2>북마크 페이지</h2>
            {productData.filter((el)=>el.bookmark===true).map((el)=><Item el={el}></Item>)}
        </section>
    );
}
export default Bookmark;