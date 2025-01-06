'use client';
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { 
  SearchCard, 
  SearchButton, 
  SearchInput, 
  SearchContainer,
  SearchIconWrapper 
} from '../styles/FriendsSearchStyles';
import { useSearch } from '../utils/FriendsSearchUtils';
import { useTheme } from '@/context/theme/ThemeContext';

function FriendsSearchComp() {
  const { theme } = useTheme();
  const { searchTerm, handleSearch, clearSearch } = useSearch();

  return (
    <SearchCard theme={theme}>
      <SearchContainer>
        <InputGroup>
          <SearchIconWrapper theme={theme}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIconWrapper>
          <SearchInput
            placeholder="Search friends..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            theme={theme}
          />
          {searchTerm && (
            <SearchButton 
              theme={theme} 
              onClick={clearSearch}
              variant="clear"
            >
              <FontAwesomeIcon icon={faTimes} />
            </SearchButton>
          )}
        </InputGroup>
      </SearchContainer>
    </SearchCard>
  );
}

export default FriendsSearchComp;
