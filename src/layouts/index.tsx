// components/Layout/index.tsx
import React from 'react';
import { Container } from './layout';
import { GlobalStyles } from '@/styles/styles/GlobalStyles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;