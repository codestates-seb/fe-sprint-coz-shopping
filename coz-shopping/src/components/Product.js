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

  return <div className="product"></div>;
};

export default List;
