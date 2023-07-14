import styled from "styled-components";

const ProdSpan = styled.span`
  font-size: 1rem;
  color: grey;
`;

const SpanContainer = styled.div`
  border-top: 2px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  max-width: 2400px;
  height: 58px;
  margin-top: 20px;
`;

function Footer() {
  return (
    <SpanContainer>
      <ProdSpan>개인정보 처리방침 | 이용약관</ProdSpan>
      <ProdSpan>All rights reserved @ Codestates</ProdSpan>
    </SpanContainer>
  );
}

export default Footer;
