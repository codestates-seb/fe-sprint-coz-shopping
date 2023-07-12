import { useState } from "react";

function Dropdown() {
  const [name, setName] = useState("O O O");
  return (
    <div className="dropdown_list">
      <li className="dropdown_item">{name} 님 안녕하세요!!</li>
      <li className="dropdown_item">
        <img src="product.png" alt="product icon" />
        상품리스트 페이지
      </li>
      <li className="dropdown_item">
        <img src="bookmark.png" alt="bookmark icon" />
        북마크 페이지
      </li>
    </div>
  );
}

export default Dropdown;
