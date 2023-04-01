import { MouseEventHandler } from "react";
import { NextButton, PrevButton, PaginationContainer } from "./pagination";
import { useFavorites } from '@/context/FavoritesContext';
interface PaginationProps {
  currentPage: number;
  handlePrevPage: MouseEventHandler<HTMLButtonElement>;
  handleNextPage: MouseEventHandler<HTMLButtonElement>;
}

const Pagination = ({ currentPage, handlePrevPage, handleNextPage }: PaginationProps) => {
  const {totalCharacters} = useFavorites()
  return (
    <PaginationContainer>
      <PrevButton onClick={handlePrevPage} >
        Anterior
      </PrevButton>
      <span>
        Página {currentPage} de {totalCharacters}
      </span>
      <NextButton onClick={handleNextPage} >
        Próximo
      </NextButton>
    </PaginationContainer>
  );
};

export default Pagination;