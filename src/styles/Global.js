import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 58px;

  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

`;

export default GlobalStyles;
