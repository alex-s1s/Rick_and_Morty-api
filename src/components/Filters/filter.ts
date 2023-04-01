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
  padding: 5px 40px 5px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f6f8fa;
  transition: background-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #808080;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 5px 30px 5px 12px;
    width: 100%;
  }
`;

export {FilterContainer, FilterSelect}