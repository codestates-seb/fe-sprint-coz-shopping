import { useState } from "react";
import iconBookmark from "../icon/북마크 아이콘.png";
import iconBookmarkOn from "../icon/북마크 아이콘 - on.png";

const List = () => {
  const [isBookmark, setIsBookmark] = useState(false);

  const handleBookmark = () => setIsBookmark(!isBookmark);

  return (
    <div>
      <img src="" alt="product" />
      <img
        src={isBookmark ? iconBookmarkOn : iconBookmark}
        alt="bookmark"
        onClick={handleBookmark}
      />
      <span>상품명</span>
      <span>할인률</span>
      <span>부가 설명</span>
      <span>가격 / 관심고객수 / null</span>
    </div>
  );
};

export default List;
