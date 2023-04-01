// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import FavoritesProvider from '@/context/FavoritesContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <Component {...pageProps} />
    </FavoritesProvider>
  );
}

export default App;