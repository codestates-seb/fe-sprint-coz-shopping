import { useState } from 'react';
import styled from 'styled-components';
import allImg from "../assets/all.png";
import productImg from "../assets/product.png";
import categoryImg from "../assets/category.png";
import exhibitionImg from "../assets/exhibition.png";
import brandImg from "../assets/brand.png";

export default function FilterButtons({ setCurFilter, setPage }) {
    const [active, setActive] = useState("All");
    const filter = [
        { src: allImg, type: "All", description: "전체"},
        { src: productImg, type: "Product", description: "상품"},
        { src: categoryImg, type: "Category", description: "카테고리"},
        { src: exhibitionImg, type: "Exhibition", description: "기획전"},
        { src: brandImg, type: "Brand", description: "브랜드"},
    ]

    function handleProductFilterChange(type) {
        setCurFilter(type);
        setActive(type);
    }

    return (
        <ProductFilterBtnContainer>
            {filter.map((el) => {
                return (
                    <ProductFilterBtn key={el.type} onClick={() => handleProductFilterChange(el.type)}>
                        <ProductFilterImg src={el.src} alt={el.description} />
                        <ProductFilterTitle className={active === el.type ? "active" : ""}>{el.description}</ProductFilterTitle>
                    </ProductFilterBtn>
                )
            })}
        </ProductFilterBtnContainer>
    );
}


// styled-components
const ProductFilterBtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.25rem;
    margin-bottom: 1.5rem;
`

const ProductFilterBtn = styled.div`
    height: 6.875rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const ProductFilterImg = styled.img`
    width: 82px;
    height: 82px;
`

const ProductFilterTitle = styled.span`
    font-size: 16px;
    margin-top: 0.25rem;
    &.active {
        
        color: #412DD4;
        border-bottom: 3px solid #412DD4;
    }
`