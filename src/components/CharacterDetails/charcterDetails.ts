import { breakpoints } from "@/styles/breakpoints";
import { BsArrowReturnLeft } from "react-icons/bs";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 24px 0px;

  @media (max-width: ${breakpoints.sm}) {
     gap: 0;
  }
`;

const Detail = styled.p`
  font-size: 1.1rem;
  color: #333;
  &:first-child {
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  @media (max-width: ${breakpoints.sm}) {
     width: 100%;
  }
`;

const StyledArrowIcon = styled(BsArrowReturnLeft)`
  font-size: 30px;
  color: #333; // Personalize a cor do ícone aqui
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #555; // Personalize a cor do ícone no hover aqui
  }
`;

export { ImageContainer, Detail, DetailsContainer, Title, StyledArrowIcon }