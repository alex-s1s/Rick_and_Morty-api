// components/CharacterList/index.tsx
import React, { useEffect, useState } from 'react';
import CharacterCard, { CharacterCardProps } from '../CharacterCard';
import { GridContainer, GridItem } from './CharacterList';

interface CharacterListProps {
  query: string;
  filters: {
    status: string;
    gender: string;
    species: string;
  };
  page: number;
}

const CharacterList = ({ query, filters, page }: CharacterListProps) => {
  const [characters, setCharacters] = useState<CharacterCardProps[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const filterParams = Object.entries(filters)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}&${filterParams}&page=${page}`
      );

      const data = await response.json();

      setCharacters(data.results);
    };

    fetchCharacters();
  }, [query, filters, page]);

  return (
    <GridContainer>
      {characters &&
      characters.map((character) => (
        <GridItem key={character.id}>
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            location={character.location}
            origin={character.origin}
            species={character.species}
            status={character.status}
            type={character.type}
          />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default CharacterList;