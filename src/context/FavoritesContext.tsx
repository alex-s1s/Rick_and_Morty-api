// contexts/FavoritesContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { CharacterCardProps } from '@/components/CharacterCard';

interface FavoritesContextData {
  favorites: CharacterCardProps[];
  addToFavorites: (character: CharacterCardProps) => void;
  removeFromFavorites: (characterId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<CharacterCardProps[]>([]);

  const addToFavorites = (character: CharacterCardProps) => {
    setFavorites((prevState) => [...prevState, character]);
  };

  const removeFromFavorites = (characterId: number) => {
    setFavorites((prevState) => prevState.filter((character) => character.id !== characterId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
}

export default FavoritesProvider;