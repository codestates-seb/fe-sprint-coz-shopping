import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  padding: 1rem 3rem;
`;

const ProductListPage = (props) => {
  return (
    <>
      <Header />
      <ProductListContainer>
      </ProductListContainer>
      <Footer />
    </>
  );
}

export default ProductListPage;