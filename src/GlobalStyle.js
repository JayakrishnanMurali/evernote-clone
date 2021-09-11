import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --primary-bg-color: #020202;
    --secondary-bg-color: #343a40;
    --green-color: #38b000;
    --dark-green-color: #008000;
    --grey-color: #adb5bd;
    --off-white-color: #e8f1f2;
    --white-color: #ffffff;
    --blue-color: #16db65;
    --black-color: #111111;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Sora', sans-serif;
  }
`;

export default GlobalStyle;
