import { createGlobalStyle } from "styled-components";

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};
setScreenSize();

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@500&display=swap');

  :root {
    --theme-fore: #000000;
    --theme-back: #ffffff;
    --theme-highlight: ##412DD4;
    --size-half: 5px;
    --size-base: 10px;
    --font-family-base: 'Noto Sans KR', 'sans-serif';
    --font-size-sm: 12px;
    --font-size-base: 16px;
    --font-size-lg: 24px;
    --font-size-title: 32px;
    --font-weight-normal: 400;
    --font-weight-bold: 700;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --theme-fore: #ffffff;
      --theme-back: #000000;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    background: unset;
    color: var(--theme-fore);
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    vertical-align: middle;
    text-decoration-line: none;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ul{
    list-style:none;
    padding-left:0px;
   }
`;

export default GlobalStyle;
