import ProductCard from "../component/ProductCard";
import { styled } from "styled-components";


const StyleBookMark = styled.div`
 
   display: flex;
    align-items:center;
    justify-content:center;
    margin: 24px 76px;
    gap: 0.75rem;
`


function BookMark({ products, toggleBookmark }) {
    return (
        <StyleBookMark>
            {products
                .filter((product) => product.checked).slice(0,4 ).length ? (
                products
                    .filter((product) => product.checked)
                    .slice(0, 4)
                    .map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            toggleBookmark={toggleBookmark}
                        />
                    ))
            ) : (
                <h4>북마크된 항목이 존재하지 않습니다</h4>
            )}        
        </StyleBookMark>
    )
}
export default BookMark;