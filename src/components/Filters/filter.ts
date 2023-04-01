import styled from 'styled-components';
import { breakpoints } from '@/styles/breakpoints';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 20px;
  align-items: center;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    align-items: end;
  }
`;

const FilterSelect = styled.select`
  height: 35px;
  padding: 5px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // adicionar sombras
  background-color: #f6f8fa; // alterar a cor de fundo
  transition: background-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #808080;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // adicionar sombras ao focar
    background-color: #ffffff; // cor de fundo ao focar
  }
`;

export {FilterContainer, FilterSelect}