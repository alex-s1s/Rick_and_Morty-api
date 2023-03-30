import styled from 'styled-components';

const Button = styled.button`
  background-color: #85dab8;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #47866e;
  }

  &:disabled {
    background-color: #d1d1d1;
    color: #333;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(Button)`
  margin-right: 16px;
`;

const NextButton = styled(Button)`
  margin-left: 16px;
`;

const PaginationContainer = styled.div`
  text-align: center;
`;

export {PrevButton, NextButton, PaginationContainer}