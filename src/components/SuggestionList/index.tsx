// components/SuggestionList/index.tsx
import React from 'react';
import { List, ListItem } from './SuggestionList';

interface SuggestionListProps {
  characters: Array<{ id: number; name: string }>;
  onSelect: (id: number) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  characters,
  onSelect,
}) => {
  return (
    <List>
      {characters.map((character) => (
        <ListItem key={character.id} onClick={() => onSelect(character.id)}>
          {character.name}
        </ListItem>
      ))}
    </List>
  );
};

export default SuggestionList;