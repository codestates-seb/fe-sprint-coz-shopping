import React from "react";
import { styled } from "styled-components";
import ToastItem from "./ToastItem";
const StyleToastContainer = styled.ul`
  position: fixed;
  right: 10px;
  bottom: 0px;
  width: 310px;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  padding: 12px 0;
  gap: 4px;
`;

export default function ToastConatiner({ toasts }) {
  console.log(toasts);
  return (
    <StyleToastContainer>
      {toasts?.map((toast, i) => (
        <ToastItem key={toast.id} toast={toast.toast}></ToastItem>
      ))}
    </StyleToastContainer>
  );
}
