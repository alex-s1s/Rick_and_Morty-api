import styled from "styled-components";

const FloatingButton = styled.button`
  position: sticky;
  bottom: 20px;
  right: 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  line-height: 60px;
  text-align: center;
`;

const Badge = styled.span`
  position: absolute;
  height: 15px;
  top: -5px;
  right: -5px;
  background-color: #ff4141;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export {Badge, FloatingButton, FloatingButtonContainer}
