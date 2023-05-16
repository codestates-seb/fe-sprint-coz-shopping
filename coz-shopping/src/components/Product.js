import { useContext, useState } from "react";
import iconBookmark from "../icon/북마크 아이콘.png";
import iconBookmarkOn from "../icon/북마크 아이콘 - on.png";
import { ProductsContext } from "../App";
import "../components/Product.css";

const List = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { products } = useContext(ProductsContext);

  const handleBookmark = () => setIsBookmark(!isBookmark);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseMoal = () => setOpenModal(false);

  const Modal = ({ img }) => {
    return (
      <div className="modal">
        <img className="modal__img" src={img} alt="Production" />
        <button className="modal__button" onClick={handleCloseMoal}>
          X
        </button>
      </div>
    );
  };

  return (
    <div className="product">
      {products.map((item, id) => {
        return (
          <div className="product__info" key={id}>
            <div className="info__img">
              <img
                className="info_imgProduct"
                src={item.image_url || item.brand_image_url}
                alt="product"
                onClick={handleOpenModal}
              />
              <img
                className="info__imgBookmark"
                src={isBookmark ? iconBookmarkOn : iconBookmark}
                alt="bookmark"
                onClick={handleBookmark}
              />
            </div>
            <div className="info__text">
              <span className="info__detail">{item.title || item.brand_name}</span>
              <span className="info__detail">{item.discountPercentage}</span>
            </div>
            <div className="info__text">
              <span className="info__detail">{item.sub_title}</span>
              <span className="info__detail">{item.price || item.follower}</span>
            </div>
            {openModal && <Modal img={item.image_url} />}
          </div>
        );
      })}
    </div>
  );
};

export default List;
