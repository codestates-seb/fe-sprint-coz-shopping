import React from "react";
import { useState,useEffect } from "react";
import DebugComponent from "../util/DebugComponent";
import Product from "../Product/Product";

export default function ProductList () {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
        .then(res => res.json())
        .then(json => {
            setProducts(json)
        })
    },[])

    return (
        <div className="product_list_container">
            <div className="product_list_filter">

            </div>
            <div className="products_container">
            {products.map((product,idx) => 
                <Product product={product} key={idx}/>)}
            </div>
            <DebugComponent data={products}></DebugComponent>
        </div>
    )
}