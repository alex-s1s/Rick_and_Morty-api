import styled from 'styled-components';

export const List = styled.ul`
  background-color: #ffffff;
  border-radius: 6px;
  list-style: none;
  padding: 8px;
  max-height: 250px;
  margin: 0 auto;
  overflow-y: auto;
  position: absolute;
  width: 50%;
  z-index: 10;
  top: 100%; // para posicionar logo abaixo do componente irmão
  left: 50%; // para centralizar
  transform: translateX(-50%); // para ajustar a posição
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); // adicionar sombras
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 8px;
  margin-bottom: 4px;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #f6f8fa; // alterar a cor de fundo do item
  transition: background-color 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #e6e9ed; // cor de fundo ao passar o mouse
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1); // adicionar sombra ao passar o mouse
  }

  &:last-child {
    margin-bottom: 0; // remover a margem do último item
  }
`;
