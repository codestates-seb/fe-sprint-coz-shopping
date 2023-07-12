const { Item } = require("./style");

const Product = ({ item }) => {
  return (
    <Item>
      <img src={item.image_url} alt={item.title} />
      <div>
        <p className="name">{item.title}</p>
        {item.discountPercentage ? (
          <p className="discount">{item.discountPercentage}%</p>
        ) : null}
      </div>
      <div>
        <p className="price">{item.price}원</p>
      </div>
    </Item>
  );
};

export default Product;
