import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

    :root {
        font-family: "Mier", sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        color-scheme: light dark;
        color: #000000;
        background-color: #DFC8E7;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    h1, h2, h3, h4, h5, h6, ul, ol, li, button, input {
        all: unset;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Content = styled.div`
  width: 100vw;
  height: 93vh;
  padding-top: 7vh;
`;
