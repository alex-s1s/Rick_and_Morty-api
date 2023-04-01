import React, { MouseEventHandler } from "react";
import { NextButton, PrevButton, PaginationContainer } from "./pagination";

interface PaginationProps {
  handlePrevPage: MouseEventHandler<HTMLButtonElement>;
  handleNextPage: MouseEventHandler<HTMLButtonElement>;
}

const Pagination = ({ handlePrevPage, handleNextPage }: PaginationProps) => {
  return (
    <PaginationContainer>
      <PrevButton onClick={handlePrevPage} >
        Anterior
      </PrevButton>
      <NextButton onClick={handleNextPage} >
        Próximo
      </NextButton>
    </PaginationContainer>
  );
};

export default Pagination;