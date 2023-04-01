import { Badge, FloatingButton, FloatingButtonContainer } from './FleatIcon';

interface FloatingIconProps {
  onClick: () => void;
  count: number;
}

const FloatingIcon = ({ onClick, count }: FloatingIconProps) => {
  return (
       <FloatingButtonContainer>
            <FloatingButton onClick={onClick}>
            ★
            {count > 0 && <Badge>{count}</Badge>}
          </FloatingButton>
       </FloatingButtonContainer>
  );
};

export default FloatingIcon;
