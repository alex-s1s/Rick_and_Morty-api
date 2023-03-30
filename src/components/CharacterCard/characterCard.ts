// components/CharacterCard/styles.ts
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  padding: 16px;

  &image{
    width: 100%;
  }
`;

export const CardTitle = styled.h3`
  color: #4F81C7;
`;

export const CardButton = styled.button`
  background-color: #85DAB8;
  color: #FFFFFF;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #47866E;
  }
`;