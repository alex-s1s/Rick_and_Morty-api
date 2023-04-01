import styled from 'styled-components';

const FloatingButton = styled.button`
  position: fixed;
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
`;

interface FloatingIconProps {
  onClick: () => void;
}

const FloatingIcon = ({ onClick }: FloatingIconProps) => {
  return <FloatingButton onClick={onClick}>★</FloatingButton>;
};

export default FloatingIcon;
