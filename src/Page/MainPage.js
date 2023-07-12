import styled from 'styled-components';
import Item from "../Component/Item";

export default function MainPage({ mainProductList }) {
    return (
        <MainProductContainer>
            <MainProductSection>
                <MainProductTitle>상품 리스트</MainProductTitle>
                <MainProductItems>
                    {mainProductList.map((data) => <Item key={data.id} data={data} />)}
                </MainProductItems>
            </MainProductSection>
            <MainProductSection>
                <MainProductTitle>북마크 리스트</MainProductTitle>
                <MainProductItems>
                    {mainProductList.map((data) => <Item key={data.id} data={data} />)}
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
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 0;
`
