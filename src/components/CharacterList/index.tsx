import CharacterCard from '../CharacterCard';
import { GridContainer, GridItem } from './CharacterList';
import useCharacters from '@/hooks/useCharacters';

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
  const { characters, error } = useCharacters(query, filters, page);

  if (error) {
    return <div>{error}</div>;
  }

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
