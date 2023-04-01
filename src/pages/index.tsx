// pages/index.tsx
import Layout from '@/layouts';
import CharacterList from '@/components/CharacterList';
import SearchBar from '@/components/SearchBar';
import SuggestionList from '@/components/SuggestionList';
import Filters from '@/components/Filters';
import useGeneralPage from '@/hooks/useGeneralPage';
import { SearchWrapper } from '@/styles/styles/GlobalStyles';
import Pagination from '@/components/Pagination';

const Home = () => {
  const {
    handlePrevPage,
    handleFilterChange,
    handleNextPage,
    handleSuggestionSelect,
    handleSearch,
    searchQuery,
    suggestedCharacters,
    page,
    filters
  } = useGeneralPage()

  return (
    <Layout>
      <h1>Catálogo de personagens de Rick e Morty</h1>
     <SearchWrapper>
        <SearchBar onSearch={handleSearch} />
        {searchQuery && suggestedCharacters?.length > 0 && (
          <SuggestionList
            characters={suggestedCharacters}
            onSelect={handleSuggestionSelect}
          />
        )}
      </SearchWrapper>
      <Filters onFilterChange={handleFilterChange} />
      <CharacterList query={searchQuery} page={page} filters={filters} />
      <Pagination handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} currentPage={page} />
    </Layout>
  );
};

export default Home;