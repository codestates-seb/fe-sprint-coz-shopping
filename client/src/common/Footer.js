import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  font-size: 0.6rem;
  color: gray;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      <div>개인정보 처리방침 | 이용 약관</div>
      <div>Allrights reserved @ Codestates</div>
    </FooterContainer>
  );
}

export default Footer;