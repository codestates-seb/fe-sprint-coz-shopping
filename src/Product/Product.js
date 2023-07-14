import React from "react";
import './Product.css'

export default function Product ({product}) {
    return (
        <div key={product.id} className="product">
            {/* 이미지 key이름이 다를때 논리합 연산자로 받아오기 */}
            <img className="product_profile" src={product.image_url || product.brand_image_url} alt="product image"/>
            <span className="product-title">
                {product.type === 'Category' ? `#${product.title}` || `#${product.brand_name}`: product.title || product.brand_name}</span>
            <span className="product_sub_title">{product.sub_title ? `${product.sub_title}` : null}</span>
            <span className="product-follower_wrapper">
                <p className="product_follwer">
                    {product.type === 'Brand' ? '관심고객수' : null}
                </p>
                {product.follower ? `${product.follower} ` : null}
            </span>
            <span className="product-dcRate">{product.discountPercentage ? `${product.discountPercentage}%` : null}</span>
            <span className="product-price">{product.price ? `${product.price}원` : null}</span>
        </div>
    )
} 