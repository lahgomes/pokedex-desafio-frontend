import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }

  a {
   color: inherit;
   text-decoration: inherit;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyle;
