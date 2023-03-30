// components/SearchBar/index.tsx
import React, { useState, useEffect } from 'react';
import { SearchInput, ContainerSerach } from './searchBar';

// components/SearchBar/index.tsx
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSuggestionSelect: (id: number) => void;
  onSearch: () => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  return (
    <ContainerSerach>
       <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar personagens..."
      />
    </ContainerSerach>
  );
};

export default SearchBar;