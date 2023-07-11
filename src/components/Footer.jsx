import React from "react";
import { styled } from "styled-components";

const StyleFooter = styled.footer`
  text-align: center;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  p {
    color: #888;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 88.023%;
  }
`;

export default function Footer() {
  return (
    <StyleFooter>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </StyleFooter>
  );
}
