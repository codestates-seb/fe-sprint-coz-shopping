import React from "react";
import styled from "styled-components";


export const ItemInfo = styled.div`
    width: 300px;
    margin: 0;

    img {
        width: 300px;
        height: 200px;
        border-radius: 10px;
    }

    .title_discount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        }

    .title_discount h3, p {
        margin: 0;
    }



    .price {
        font-size: 1.2rem;
        font-weight: 600;
        color: #ff6b6b;
        display: flex;
        justify-content: flex-end;
    }
`;


function RenderItem({ products }) {
  let renderedItems = [];
  
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].type === "Brand") {
        renderedItems.push(
          <ItemInfo key={products[i].id}>
            <img src={products[i].brand_image_url} alt="img"  />
            <h3>{products[i].brand_name}</h3>
            <p>{products[i].follower}</p>
          </ItemInfo>
        );
      } else if (products[i].type === "Exhibition") {
        renderedItems.push(
          <ItemInfo key={products[i].id}>
            <img src={products[i].image_url}  alt="img"/>
            <h3>{products[i].title}</h3>
            <p className="sub_title">{products[i].sub_title}</p>
          </ItemInfo>
        );
      } else if (products[i].type === "Product") {
        renderedItems.push(
          <ItemInfo key={products[i].id}>
            <img src={products[i].image_url} alt="img"/>
            <div className="title_discount">
              <h3>{products[i].title}</h3>
              <p>{products[i].discountPercentage}%</p>
            </div>
            <p className="price">{products[i].price}원</p>
          </ItemInfo>
        );
      } else if (products[i].type === "Category") {
        renderedItems.push(
          <ItemInfo key={products[i].id}>
            <img src={products[i].image_url} alt="img"/>
            <h3># {products[i].title}</h3>
          </ItemInfo>
        );
      }
    }
    return renderedItems;
  }
}

export default RenderItem;
