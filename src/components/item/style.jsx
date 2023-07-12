import { styled, css } from "styled-components";

export const ItemStyle = styled.section`
  margin-bottom: var(--size-base);
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
    ${(props) => {
      if (props.type === "Product") {
        return css`
          & > p.title {
            width: 214px;
            height: 24px;
            font-weight: var(--font-weight-extrabold);
            display: flex;
            align-items: center;
          }

          & > p.discount {
            width: 50px;
            height: 24px;
            text-align: right;
            font-weight: var(--font-weight-extrabold);
            color: var(--theme-highlight);
            display: flex;
            align-items: center;
          }
        `;
      } else if (props.type === "Category") {
        return css`
          & > p.title {
            width: 264px;
            height: 24px;
            font-weight: var(--font-weight-extrabold);
            display: flex;
            align-items: center;
          }
        `;
      }
    }}
  }

  & > div:nth-child(3) {
    width: 264px;
    height: 24px;
    display: flex;
    align-items: center;
    ${(props) => {
      if (props.type === "Product") {
        return css`
          text-align: right;
        `;
      }
    }}
  }
`;
