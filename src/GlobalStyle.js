import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --primary-bg-color: #020202;
    --secondary-bg-color: #343a40;
    --green-color: #38b000;
    --dark-green-color: #008000;
    --grey-color: #adb5bd;
    --off-white-color: #e8f1f2;
    --white-color: #ffffff;
    --blue-color: #00b3f0;
    --black-color: #111111;
    --orange-color: #ffaa00;
    --dark-gray-color: #343a40;
    --black-fade-gradient: linear-gradient(
      180deg,
      transparent,
      rgba(16, 16, 16, 0.7),
      #020202
    );
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

export const FlexboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default GlobalStyle;
