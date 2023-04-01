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
  padding: 5px 20px 5px 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f6f8fa;
  transition: background-color 0.2s, box-shadow 0.2s;

   -webkit-appearance: none !important;
    -moz-appearance: none !important;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC);
    background-position: 100%;
    width: 20%;
    background-repeat: no-repeat;

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