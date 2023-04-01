// components/Filters.tsx
import React, { useState } from 'react';
import {FilterContainer, FilterSelect} from './filter'
import { CardButton } from '../CharacterCard/characterCard';
import { filterOptions } from '../../utils';

interface FiltersType {
  status: string;
  gender: string;
  species: string;
}

type FilterName = keyof FiltersType;

interface SelectedFilters extends Record<keyof FiltersType, string> {}

interface FiltersProps {
  onFilterChange: (filterName: string, filterValue: string) => void;
}

 const Filters = ({ onFilterChange }: FiltersProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedFilters((prevSelectedFilters: SelectedFilters) => ({
      ...prevSelectedFilters,
      [name]: value,
    }));
    onFilterChange(name, value);
  };

   const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    status: '',
    gender: '',
    species: '',
  });

 const handleClearFilters = () => {
    setSelectedFilters({ status: '', gender: '', species: '' });
    onFilterChange('status', '');
    onFilterChange('gender', '');
    onFilterChange('species', '');
  };

  return (
   <FilterContainer>
    {Object.entries(filterOptions).map(([filterName, options]) => {
      const key = filterName as FilterName;

      return (
        <FilterSelect
          key={key}
          name={key}
          value={selectedFilters[key]}
          onChange={handleFilterChange}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </FilterSelect>
      );
    })}
    <CardButton onClick={handleClearFilters}>Limpar filtros</CardButton>
  </FilterContainer>
);
};

export default Filters