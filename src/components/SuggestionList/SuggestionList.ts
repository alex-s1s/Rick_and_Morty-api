// components/SuggestionList/styles.ts
import styled from 'styled-components';

export const List = styled.ul`
  background-color: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  list-style: none;
  margin: 8px 0;
  padding: 8px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 20%;
  z-index: 10;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;