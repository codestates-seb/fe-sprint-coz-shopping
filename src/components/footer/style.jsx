import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 58px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);

  & > footer {
    width: 1128px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: var(--font-size-sm);
    }
  }
`;
