// pages/index.tsx
import Layout from '@/layouts';
import { Router, useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import CharacterList from '../components/CharacterList';
import SearchBar from '../components/SearchBar';
import SuggestionList from '../components/SuggestionList';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter()
  const [suggestedCharacters, setSuggestedCharacters] = useState([]);

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}`,
      );
      const data = await response.json();
      setSuggestedCharacters(data.results);
    } else {
      setSuggestedCharacters([]);
    }
  }, []);

  const handleSuggestionSelect = (id: number) => {
    setSearchQuery('');
    setSuggestedCharacters([]);
    router.push(`/details/${id}`);
  };

  return (
    <Layout>
      <h1>Rick and Morty Character Catalog</h1>
      <SearchBar onSearch={handleSearch} />
      {searchQuery && suggestedCharacters.length > 0 && (
        <SuggestionList
          characters={suggestedCharacters}
          onSelect={handleSuggestionSelect}
        />
      )}
      <CharacterList query={searchQuery} />
    </Layout>
  );
};

export default Home;