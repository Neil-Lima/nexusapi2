'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faTag 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { useEventsFilter } from '../utils/EventsFilterUtils';
import {
  FilterContainer,
  FilterGroup,
  FilterInput,
  FilterSelect,
  FilterDatePicker,
  FilterTags,
  FilterTag,
  FilterActions,
  ApplyButton,
  ResetButton
} from '../styles/EventsFilterStyles';

export default function EventsFilterComp() {
  const { theme } = useTheme();
  const {
    filters,
    categories,
    locations,
    selectedTags,
    handleFilterChange,
    handleTagToggle,
    handleDateChange,
    handleApplyFilters,
    handleResetFilters
  } = useEventsFilter();

  return (
    <FilterContainer theme={theme}>
      <FilterGroup>
        <FontAwesomeIcon icon={faSearch} />
        <FilterInput
          type="text"
          placeholder="Buscar eventos..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          theme={theme}
        />
      </FilterGroup>

      <FilterGroup>
        <FontAwesomeIcon icon={faCalendarAlt} />
        <FilterDatePicker
          selected={filters.date}
          onChange={(date) => handleDateChange(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Selecione uma data"
          theme={theme}
        />
      </FilterGroup>

      <FilterGroup>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <FilterSelect
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          theme={theme}
        >
          <option value="">Todas as localizações</option>
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterTags>
        {categories.map(category => (
          <FilterTag
            key={category}
            selected={selectedTags.includes(category)}
            onClick={() => handleTagToggle(category)}
            theme={theme}
          >
            <FontAwesomeIcon icon={faTag} />
            {category}
          </FilterTag>
        ))}
      </FilterTags>

      <FilterActions>
        <ApplyButton onClick={handleApplyFilters} theme={theme}>
          Aplicar Filtros
        </ApplyButton>
        <ResetButton onClick={handleResetFilters} theme={theme}>
          Resetar
        </ResetButton>
      </FilterActions>
    </FilterContainer>
  );
}
