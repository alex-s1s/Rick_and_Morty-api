// components/CharacterCard/styles.ts
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;


export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
`;

export const CardText = styled.p`
  margin: 8px 0;
  font-size: 16px;
  color: #666666;
`;

export const CardButton = styled.button`
  align-self: center;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #85dab8;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #47866e;
  }
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #ffcc00;
  cursor: pointer;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 5px;
  width: 26px;
  height: 26px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

