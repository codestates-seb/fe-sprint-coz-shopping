import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);

  & > header {
    width: 1128px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: var(--size-base);
  }

  & > h1 {
    font-size: 32px;
    font-weight: var(--font-weight-bold);
  }
`;

export const Menu = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  margin-left: -83px;
  margin-top: 40px;
  border-radius: 12px;
  background-color: var(--theme-back);
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);

  & > div {
    width: 200px;
    height: 50px;

    a {
      width: 100%;
      height: 100%;
      padding-left: 24px;
      display: flex;
      align-items: center;
    }

    img {
      margin-right: var(--size-half);
    }
  }

  & > div:nth-child(n + 2) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
