// components/SearchBar/styles.ts
import styled from "styled-components";

export const SearchInput = styled.input`
  background-color: #F0F0F0;
  color: #333333;
  border: none;
  padding: 10px 16px 10px 40px; // Aumente o padding à esquerda para acomodar a lupa
  border-radius: 25px; // Aumente o border-radius para torná-lo mais arredondado
  position: relative;
  width: 50%;
  font-size: 1rem;

  &:focus {
    outline: none;
    border: 1px solid #B0E0D9; // Suavizar a cor da borda
    box-shadow: 0px 0px 5px rgba(176, 224, 217, 0.4); // Adicionar um efeito de sombra na borda
  }

  &::placeholder {
    color: #777777; // Suavizar a cor do texto do placeholder
  }

  &::before {
    content: "🔍"; // Adicionar uma lupa
    position: absolute;
    left: 12px; // Posicionar a lupa à esquerda
    top: 50%; // Centralizar a lupa verticalmente
    transform: translateY(-50%);
  }
`;

export const ContainerSerach = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
