// components/CharacterList/index.tsx
import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard';
import { GridContainer, GridItem } from './CharacterList';

interface CharacterListProps {
  query: string;
  page: number;
}

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterList: React.FC<CharacterListProps> = ({ query, page }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

   const fetchCharacters = async () => {
    const url = query
      ? `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`
      : `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
  fetchCharacters();
}, [query, page]);

  return (
    <GridContainer>
      {characters.map((character) => (
        <GridItem key={character.id}>
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
          />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default CharacterList;