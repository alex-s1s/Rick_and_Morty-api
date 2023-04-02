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
              character={character}
            />
          </GridItem>
        ))}
    </GridContainer>
  );
};

export default CharacterList;
