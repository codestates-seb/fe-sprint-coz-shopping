import { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Item from "../Component/Item";
import FilterButtons from '../Component/FilterButtons.js';

export default function ProductListPage({ productList, bookmarkList, setBookmarkList, curFilter, setCurFilter }) {
    const [curFilteredProductData, setCurFilteredProductData] = useState([]);
    const [page, setPage] = useState(1);
    const [curProducts, setCurProducts] = useState(productList.slice(0, 10 * page));
    const [isLoading, setIsLoading] = useState(false);
    const bottom = useRef(null);

    useEffect(() => {
        if (curFilter === "All") {
            setCurFilteredProductData(productList);
        } else {
            const filteredData = productList.filter(el => el.type === curFilter);
            setCurFilteredProductData(filteredData);
        }
    }, [curFilter]);

    const renderNextPage = useCallback(() => {
        setIsLoading(true);

        if (page < 10) {
            setCurProducts(productList.slice(0, 10 * (page + 1)));
            setPage(page + 1);
        }

        setIsLoading(false);
    }, [page, productList]);

    useEffect(() => {
        if (bottom.current) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    console.log(entries);
                    console.log(curProducts);
                    renderNextPage();
                }
            }, { threshold: 1 });

            observer.observe(bottom.current);
            return () => observer.disconnect();
        }
    }, [renderNextPage]);

    return (
        <ProductListBackground>
            <FilterButtons curFilter={curFilter} setCurFilter={setCurFilter} />
            <ProductList>
                {curFilter === "All" ? curProducts.map((data) => <Item key={data.id} data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />)
                    : curFilteredProductData.map((data) => <Item key={data.id} data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />)}
                {isLoading ? "Loading..." : <div ref={bottom}></div>}
            </ProductList>
        </ProductListBackground>
    );
}


// styled-components
const ProductListBackground = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
`

const ProductList = styled.div`
    width: 70.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
`
