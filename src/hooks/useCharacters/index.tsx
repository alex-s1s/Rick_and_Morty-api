// hooks/useCharacters.ts
import { useEffect, useState } from 'react';
import { CharacterCardProps } from '@/components/CharacterCard';
import { api } from '@/service';

interface Filters {
  status: string;
  gender: string;
  species: string;
}

const useCharacters = (
  query: string,
  filters: Filters,
  page: number
): { characters: CharacterCardProps[]; error: string } => {
  const [characters, setCharacters] = useState<CharacterCardProps[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const filterParams = Object.entries(filters)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      try {
        const { data } = await api.get(`/character/?name=${query}&${filterParams}&page=${page}`);

        setCharacters(data.results);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Ocorreu um erro ao buscar os personagens');
      }
    };

    fetchCharacters();
  }, [query, filters.status, filters.gender, filters.species, page, filters]);

  return { characters, error };
};

export default useCharacters;