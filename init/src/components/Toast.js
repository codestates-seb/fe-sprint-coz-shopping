import { useState, useEffect } from "react";
import styled from "styled-components";

const ToastAlert = styled.div`
  background-color: rgba(255, 127, 80, 0.4);
  border: 1px solid rgba(255, 127, 80, 0.1);
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  height: 40px;
  width: 250px;
  padding: 5px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 10%;
  right: 10%;
`;

function Toast({ setToastState }) {
  useEffect(() => {
    let timer = setTimeout(() => {
      setToastState(false); // 2초 뒤, toastState가 false가 되면서 알림창이 사라진다
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ToastAlert>
      <img alt="" src="img/alert.png" />
      <p>북마크에 추가되었습니다.</p>
    </ToastAlert>
  );
}

export default Toast;
