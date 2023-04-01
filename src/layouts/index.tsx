// components/Layout/index.tsx
import React, { useState } from 'react';
import { Container } from './layout';
import { GlobalStyles } from '@/styles/styles/GlobalStyles';
import Sidebar from '@/components/Sidebar/Sidebar';
import FloatingIcon from '@/components/FloatIcon/floatIcon';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        {children}
        {isSidebarOpen && <Sidebar />}
        <FloatingIcon onClick={toggleSidebar} />
      </Container>
    </>
  );
};

export default Layout;
