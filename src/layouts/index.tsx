import React, { useState } from 'react';
import { Container } from './layout';
import { GlobalStyles } from '@/styles/styles/GlobalStyles';
import FloatingIcon from '@/components/FloatIcon';
import Sidebar from '@/components/Sidebar/index';
import { useFavorites } from '@/context/FavoritesContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { favorites } = useFavorites();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        {children}
        {isSidebarOpen && <Sidebar />}
        <FloatingIcon onClick={toggleSidebar} count={favorites.length} isSidebarOpen={isSidebarOpen}/>
      </Container>
    </>
  );
};

export default Layout;
