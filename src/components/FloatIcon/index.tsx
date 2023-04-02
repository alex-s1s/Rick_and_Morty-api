import { useState, useEffect } from 'react'

import { Badge, FloatingButton, FloatingButtonContainer } from './FleatIcon';
import { breakpoints } from '@/styles/breakpoints';

interface FloatingIconProps {
  onClick: () => void;
  count: number;
  isSidebarOpen: boolean;
}

const FloatingIcon = ({ onClick, count, isSidebarOpen }: FloatingIconProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  const isMobile = () => window.innerWidth <= parseInt(breakpoints.sm);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (!isMobile() || isSidebarOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        // Rolando para baixo
        setIsVisible(false);
      } else {
        // Rolando para cima
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isSidebarOpen]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isVisible && !isSidebarOpen) {
      timer = setTimeout(() => {
        setIsRendered(false);
      }, 300); // Espere 300ms, que é o tempo de duração da animação da opacidade
    } else {
      setIsRendered(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  return isRendered ? (
    <FloatingButtonContainer style={{ opacity: isVisible ? 1 : 0 }}>
      <FloatingButton onClick={onClick}>
        ★
        {count > 0 && <Badge>{count}</Badge>}
      </FloatingButton>
    </FloatingButtonContainer>
  ) : null;
};

export default FloatingIcon;
