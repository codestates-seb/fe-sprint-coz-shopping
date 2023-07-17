import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import checkedIcon from "../img/bookmark-on.png";
import bookmarkIcon from "../img/bookmark-off.png";

const Toast = ({ bookmarkAction }) => {
  const [toastQueue, setToastQueue] = useState([]);
  const animationRef = useRef();

  const TOAST_TYPE = {
    ADD: "add",
    REMOVE: "remove",
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    if (bookmarkAction.length > 0) {
      setToastQueue((prev) => [
        ...prev,
        {
          type: bookmarkAction[bookmarkAction.length - 1].type,
          createAt: currentTime,
          onSlide: false,
          expiration: currentTime + 3500,
        },
      ]);
    }
  }, [bookmarkAction]);

  useEffect(() => {
    const currentTime = new Date().getTime();
    animationRef.current = requestAnimationFrame(checkTime);

    function checkTime() {
      //생성되고 0.1초 지나서 왼쪽으로 슬라이드
      setToastQueue((prev) =>
        prev.map((el) => {
          if (currentTime >= el.expiration - 3400 && !el.onSlide) {
            el = { ...el, onSlide: true };
          }
          return el;
        })
      );

      //생성되고 2초 지나서 오른쪽으로 슬라이드
      setToastQueue((prev) =>
        prev.map((el) => {
          if (currentTime >= el.expiration - 1500 && el.onSlide) {
            el = { ...el, onSlide: false };
          }
          return el;
        })
      );

      if (toastQueue.some((el) => currentTime >= el.expiration)) {
        setToastQueue((prev) => prev.slice(1));
      }
    }

    animationRef.current = requestAnimationFrame(checkTime);
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [toastQueue]);

  return (
    <StyledToast>
      {toastQueue.map((el) => {
        return (
          <li key={el.createAt} className={`toast ${el.onSlide ? "active" : ""}`}>
            {el.type === TOAST_TYPE.ADD && (
              <>
                <img src={checkedIcon} alt="북마크 체크 알림" />
                <p>상품이 북마크에 추가되었습니다</p>
              </>
            )}
            {el.type === TOAST_TYPE.REMOVE && (
              <>
                <img src={bookmarkIcon} alt="북마크 취소 알림" />
                <p>상품이 북마크에서 제거되었습니다</p>
              </>
            )}
          </li>
        );
      })}
    </StyledToast>
  );
};

const StyledToast = styled.ul`
  z-index: 3;
  position: fixed;
  bottom: 0.75rem;
  right: 1.5rem;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 0.75rem;
  transition: height 0.3s;

  .toast {
    transform: translateX(400px);
    background: #fff;
    border-radius: 0.75rem;
    padding: 1.125rem 1.5rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.5s ease-out;

    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
  }

  .toast.active {
    transform: translateX(0);
  }
`;

export default Toast;