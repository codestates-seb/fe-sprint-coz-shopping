import { useState } from "react";
import iconBookmark from "../icon/북마크 아이콘.png";
import iconBookmarkOn from "../icon/북마크 아이콘 - on.png";

const List = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleBookmark = () => setIsBookmark(!isBookmark);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseMoal = () => setOpenModal(false);

  const Modal = () => {
    return (
      <div className="modal">
        <img className="modal__img" src="" alt="Production" />
        <button className="modal__button" onClick={handleCloseMoal}>
          X
        </button>
      </div>
    );
  };

  return (
    <div>
      <div>
        <img src="" alt="product" onClick={handleOpenModal} />
        <img
          src={isBookmark ? iconBookmarkOn : iconBookmark}
          alt="bookmark"
          onClick={handleBookmark}
        />
      </div>
      <div>
        <span>상품명</span>
        <span>할인률</span>
      </div>
      <div>
        <span>부가 설명</span>
        <span>가격 / 관심고객수 / null</span>
      </div>
      {openModal && <Modal />}
    </div>
  );
};

export default List;
