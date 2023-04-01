import React, { useState, useEffect } from 'react';
import { SearchInput, ContainerSerach } from './searchBar';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSuggestionSelect: (id: number) => void;
  onSearch: () => void;
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
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