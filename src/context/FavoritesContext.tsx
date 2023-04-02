// contexts/FavoritesContext.tsx
import React, { createContext, useState, useContext, PropsWithChildren  } from 'react';
import { CharacterCardProps } from '@/components/CharacterCard';

interface FavoritesContextData {
  favorites: CharacterCardProps[];
  addToFavorites: (character: CharacterCardProps) => void;
  removeFromFavorites: (characterId: number) => void;
  totalCharacters: number,
  setTotalCharacters: (total: number) => void;
  toggleFavorite: (character: CharacterCardProps) => void;
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

const FavoritesProvider  = ({ children }: PropsWithChildren<{}>) => {
  const [favorites, setFavorites] = useState<CharacterCardProps[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);

  const addToFavorites = (character: CharacterCardProps) => {
    setFavorites((prevState) => [...prevState, character]);
  };

  const removeFromFavorites = (characterId: number) => {
    setFavorites((prevState) => prevState.filter((character) => character.id !== characterId));
  };

    const toggleFavorite = (character: CharacterCardProps) => {
    if (favorites.some((favorite) => favorite.id === character.id)) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, totalCharacters, setTotalCharacters, toggleFavorite }}>
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