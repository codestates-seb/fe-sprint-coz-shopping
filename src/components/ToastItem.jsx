import React from "react";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
const StyleToastItem = styled.li`
  display: flex;
  width: 310px;
  height: 62px;
  padding-left: 30px;
  align-items: center;
  gap: 5px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  font-weight: bold;
  transition: all.7s;
  transform: translate(-110%);
  &.fade-out {
    transform: translate(100%);
  }
`;

export default function ToastItem({ toast }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFading(true);
    }, 2300);
  }, []);

  return (
    <StyleToastItem className={isFading ? "fade-out" : ""}>
      <img src={`/images/${toast ? "checkedStar.svg" : "uncheckedStar.svg"}`} alt="" />
      <span>{toast ? "상품이 북마크에 추가되었습니다." : "상품이 북마크에서 제거되었습니다."}</span>
    </StyleToastItem>
  );
}
