import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ItemList from '../components/Item/ItemList';

const MainPage = ({ productData }) => {
  // console.log(productData);
  const bookmarkedProducts = productData.filter(product => product.checked === true);
  // console.log(bookmarkedProducts);
  return (
    <>
      <Header />
      <h3>상품 리스트</h3>
      <ItemList products={productData} />
      <h3>북마크 리스트</h3>
      <ItemList products={bookmarkedProducts} />
      <Footer />
    </>
  );
}

export default MainPage;