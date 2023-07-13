import styled from 'styled-components';
import Item from "../Component/Item";

export default function MainPage({ productList, bookmarkList, setBookmarkList }) {
    return (
        <MainProductContainer>
            <MainProductSection>
                <MainProductTitle>상품 리스트</MainProductTitle>
                <MainProductItems>
                    {productList.slice(0, 4).map((data) => <Item key={data.id} data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />)}
                </MainProductItems>
            </MainProductSection>
            <MainProductSection>
                <MainProductTitle>북마크 리스트</MainProductTitle>
                <MainProductItems>
                    {bookmarkList.length === 0 ? <NoBookmarkedItems>"북마크된 상품이 없습니다."</NoBookmarkedItems> : bookmarkList.slice(0, 4).map((data) => <Item key={data.id} data={data} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />)}
                </MainProductItems>
            </MainProductSection>
        </MainProductContainer>
    );
}


// styled-component
const MainProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 4.75rem;
`

const MainProductSection = styled.div`
    width: 70.5rem;
`

const MainProductTitle = styled.h2`
    font-weight: 600;
    margin-bottom: 0.75rem;
`

const MainProductItems = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 0;
`

const NoBookmarkedItems = styled.div`
    width: 70.5rem;
    height: 16.3125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`
