import { styled } from "styled-components";

export const Item = styled.section`
  width: 264px;
  height: 264px;

  & > img {
    width: 264px;
    height: 210px;
    border-radius: 12px;
    object-fit: cover;
  }

  & > div:nth-child(2) {
    margin-top: 6px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    p.name {
      width: 214px;
      height: 24px;
      font-weight: var(--font-weight-extrabold);
    }

    p.discount {
      width: 50px;
      height: 24px;
      text-align: right;
      font-weight: var(--font-weight-extrabold);
      color: var(--theme-highlight);
    }
  }

  & > div:nth-child(3) {
    width: 264px;
    height: 24px;
    text-align: right;
  }
`;
