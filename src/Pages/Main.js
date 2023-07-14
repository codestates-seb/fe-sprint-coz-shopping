import React, { useEffect,useState } from "react";
import DebugComponent from "../util/DebugComponent";
import Product from "../Product/Product";
import '../App.css';

export default function Main () {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
        .then(res => res.json())
        .then(json => {
            setProducts(json)
        })
    },[])
    return (
        <div className="product_category">
                <div className="product_list_title">
                    상품 리스트
                </div>  
                <div className="product_list_body">
                {products.map((product,idx) => 
                <Product product={product} key={idx}/>)}
                </div>
            <div className="bookmark_list_title">
                북마크 리스트
            </div>
            <DebugComponent data={products}></DebugComponent>
        </div>
    )
}