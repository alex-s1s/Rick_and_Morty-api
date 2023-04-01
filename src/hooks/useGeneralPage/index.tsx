import { api } from "@/service";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function useGeneralPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [suggestedCharacters, setSuggestedCharacters] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
    species: "",
  });

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);

    try {
      const filterParams = Object.entries(filters)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      if (query.trim().length > 0) {
        const { data } = await api.get(`/character/?name=${query}&${filterParams}`);
        setSuggestedCharacters(data.results);
      } else {
        setSuggestedCharacters([]);
      }
    } catch (err) {
      console.log('Ocorreu um erro ao buscar os personagens');
    }

  }, [filters]);

  useEffect(() => {
    return () => {
      setSuggestedCharacters([]);
    };
  }, [filters]);

  const handleSuggestionSelect = (id: number) => {
    setSearchQuery("");
    setSuggestedCharacters([]);
    router.push(`/details/${id}`);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  return {
    handlePrevPage,
    handleFilterChange,
    handleNextPage,
    handleSuggestionSelect,
    handleSearch,
    searchQuery,
    suggestedCharacters,
    page,
    filters,
  };
}
