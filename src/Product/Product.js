import React from "react";
import './Product.css'

export default function Product ({product}) {
    return (
        <div key={product.id} className="product">
            <img className="product_profile" src={product.image_url} alt="product image"/>
            <span className="product-title">{product.title}</span>
            <span className="product-dcRate">{`${product.discountPercentage}%` && null}</span>
            <span className="product-price">{product.price}</span>
        </div>
    )
} 