import { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Item from "../Component/Item";
import FilterButtons from '../Component/FilterButtons';

export default function BookmarkPage({ bookmarkList, setBookmarkList, curFilter, setCurFilter }) {
    const [curBookmarkData, setCurBookmarkData] = useState([]);
    const [page, setPage] = useState(1);
    const [curProducts, setCurProducts] = useState(bookmarkList.slice(0, 10 * page));
    const [isLoading, setIsLoading] = useState(false);
    const bottom = useRef(null);

    useEffect(() => {
        if (curFilter === "All") {
            setCurBookmarkData(bookmarkList);
        } else {
            const filteredData = bookmarkList.filter(el => el.type === curFilter);
            setCurBookmarkData(filteredData);
        }
    }, [curFilter]);

    const renderNextPage = useCallback(() => {
        setIsLoading(true);

        if (page < 10) {
            setCurProducts(bookmarkList.slice(0, 10 * (page + 1)));
            setPage(page + 1);
        }

        setIsLoading(false);
    }, [page, bookmarkList]);

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
            <FilterButtons setCurFilter={setCurFilter} />
            <ProductList>
                {curBookmarkData.length === 0 
                    ? <NoBookmarkedItems>북마크된 상품이 없습니다.</NoBookmarkedItems> 
                    : curFilter === "All"
                    ? curProducts.map((data) => <Item key={data.id} data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />)
                    : curBookmarkData.map((data) => <Item key={data.id} data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />)
                }
                {isLoading ? "Loading..." : <div ref={bottom}></div>}
            </ProductList>
        </ProductListBackground>
    )
}


// styled-component
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

const NoBookmarkedItems = styled.div`
    width: 70.5rem;
    height: 16.3125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`