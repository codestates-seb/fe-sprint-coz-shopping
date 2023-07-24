import ProductCard from "../component/ProductCard";
import { styled } from "styled-components";

const StyleProductList = styled.div`
 
   display: flex;
    align-items:center;
    justify-content:center;
    margin: 24px 76px;
    gap: 0.75rem;
`

function ProductListPage({ products, toggleBookmark }) {

    return (
        <StyleProductList>
            {products
                .filter((product) => !product.checked)
                .slice(0, 4)
                .map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        toggleBookmark={toggleBookmark}
                    />
                ))
            }
        </StyleProductList>
    )
}

export default ProductListPage;