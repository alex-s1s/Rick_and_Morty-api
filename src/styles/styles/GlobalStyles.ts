// styles/GlobalStyles.ts
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #FFFFFF;
    color: #333333;
    font-family: 'Roboto', sans-serif;
  }
`;


export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;