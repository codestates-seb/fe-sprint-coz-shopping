import styled from "styled-components";

const Foot = styled.footer`
  width: 100%;
  display: flex;
  height: 58px;
  padding: 11px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const P = styled.p`
  color: #888;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 88.023%;
  text-align: center;
`;

export default function Footer() {
  return (
    <Foot>
      <P>
        개인정보 처리방침 | 이용 약관
        <br />
        <br />
        All rights reserved @ Codestates
      </P>
    </Foot>
  );
}
