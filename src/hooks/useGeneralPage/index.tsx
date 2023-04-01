import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export default function useGeneralPage() {
const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter()
  const [suggestedCharacters, setSuggestedCharacters] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
  });

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);

    const filterParams = Object.entries(filters)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const url = `https://rickandmortyapi.com/api/character/?name=${query}&${filterParams}`;

    if (query.trim().length > 0) {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestedCharacters(data.results);
    } else {
      setSuggestedCharacters([]);
    }
  }, [filters]);


  const handleSuggestionSelect = (id: number) => {
    setSearchQuery('');
    setSuggestedCharacters([]);
    router.push(`/details/${id}`);
  };

  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage !== 0 ? prevPage - 1 : 1);
  };

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };


  return{
handlePrevPage,
handleFilterChange,
handleNextPage,
handleSuggestionSelect,
handleSearch,
searchQuery,
suggestedCharacters,
page,
filters
}
}
