import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from 'styled-components';

export default function MainPage() {
    return (
    <section >
        <Header></Header>
        <MainProductContainer>
            <MainProductList>
                <MainProductTitle>상품 리스트</MainProductTitle>
                <MainProductItem></MainProductItem>
            </MainProductList>
            <MainProductList>
                <MainProductTitle>북마크 리스트</MainProductTitle>
                <MainProductItem></MainProductItem>
            </MainProductList>
        </MainProductContainer>
        <Footer></Footer>
    </section>
    );
}


// styled-component
const MainProductContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 24px 76px;
`
const MainProductList = styled.div`
`
const MainProductTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
`
const MainProductItem = styled.ul`
    display: flex;
    flex-direction: row;
    
`