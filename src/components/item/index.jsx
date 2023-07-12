const { ItemStyle } = require("./style");

const Item = ({ item }) => {
  if (item.type === "Product") {
    return (
      <ItemStyle type={item.type}>
        <img src={item.image_url} alt={item.title} />
        <div>
          <p className="title">{item.title}</p>
          {item.discountPercentage ? (
            <p className="discount">{item.discountPercentage}%</p>
          ) : null}
        </div>
        <div>
          <p className="price">{item.price}원</p>
        </div>
      </ItemStyle>
    );
  } else if (item.type === "Category") {
    return (
      <ItemStyle type={item.type}>
        <img src={item.image_url} alt={item.title} />
        <div>
          <p className="title">#{item.title}</p>
        </div>
        <div></div>
      </ItemStyle>
    );
  }
};

export default Item;
