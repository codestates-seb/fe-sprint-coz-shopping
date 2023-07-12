import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";
export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 2rem "Noto Sans KR";
  text-align: center;
  font-weight: 700;
`;

export default function Loding() {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src={Spinner} alt="로딩중" width="10%" />
    </Background>
  );
}
