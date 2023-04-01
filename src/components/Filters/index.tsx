// components/Filters.tsx
import React, { useState } from 'react';
import {FilterContainer, FilterSelect} from './filter'
import { CardButton } from '../CharacterCard/characterCard';

interface FiltersProps {
  onFilterChange: (filterName: string, filterValue: string) => void;
}

const filterOptions = {
  status: [
    { value: '', label: 'Selecione um status' },
    { value: 'alive', label: 'Vivo' },
    { value: 'dead', label: 'Morto' },
    { value: 'unknown', label: 'Desconhecido' },
  ],
  gender: [
    { value: '', label: 'Selecione um gênero' },
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
    { value: 'genderless', label: 'Sem gênero' },
    { value: 'unknown', label: 'Desconhecido' },
  ],
  species: [
    { value: '', label: 'Selecione uma espécie' },
    { value: 'Alien', label: 'Alienígena' },
    { value: 'Human', label: 'Humano' },
    { value: 'Mythological Creature', label: 'Criatura Mitológica' },
    { value: 'Animal', label: 'Animal' },
    { value: 'Humanoid', label: 'Humanoide' },
    { value: 'Cronenberg', label: 'Cronenberg' },
    { value: 'Robot', label: 'Robô' },
    { value: 'Poopybutthole', label: 'Poopybutthole' },
    { value: 'unknown', label: 'Desconhecido' },
  ],
};

 const Filters = ({ onFilterChange }: FiltersProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [name]: value,
    }));
    onFilterChange(name, value);
  };

   const [selectedFilters, setSelectedFilters] = useState({
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
      {Object.entries(filterOptions).map(([filterName, options]) => (
        <FilterSelect
          key={filterName}
          name={filterName}
          value={selectedFilters[filterName]}
          onChange={handleFilterChange}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </FilterSelect>
      ))}
      <CardButton onClick={handleClearFilters}>Limpar filtros</CardButton>
    </FilterContainer>
  );
};

export default Filters