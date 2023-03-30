import { NextButton, PrevButton, PaginationContainer } from "./pagination";


const Pagination = ({ handlePrevPage, handleNextPage }) => {
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

export default Pagination