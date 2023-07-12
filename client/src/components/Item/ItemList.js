import React from 'react';
import Card from './Card';

const ItemList = ({ products }) => {
  return (
    products.map(product => <div>{product.title}</div>)
  )
}

export default ItemList;