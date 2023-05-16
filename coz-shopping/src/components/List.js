import iconBookmark from "../icon/북마크 아이콘.png";

const List = () => {
  return (
    <div>
      <img src="" alt="product" />
      <img src={iconBookmark} alt="bookmark" />
      <span>상품명</span>
      <span>할인률</span>
      <span>부가 설명</span>
      <span>가격 / 관심고객수 / null</span>
    </div>
  );
};

export default List;
