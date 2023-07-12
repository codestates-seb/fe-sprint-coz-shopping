import React from "react";
import styled from "styled-components";

export const FooterBody = styled.div`
  display: flex;
  width: 1280px;
  height: 58px;
  padding: 11px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Footer-lineone {
    color: #888;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 88.023%;
  }

  .Footer-linetwo {
    color: #888;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 88.023%;
  }
`;

function Footer() {
  return (
    <FooterBody>
      <div className="Footer-lineone">개인정보 처리방침 | 이용 약관</div>
      <div className="Footer-linetwo">All rights reserved @ Codestates</div>
    </FooterBody>
  );
}

export default Footer;
