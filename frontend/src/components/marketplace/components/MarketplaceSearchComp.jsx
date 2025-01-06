'use client';
import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faHistory } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
    SearchContainer,
    SearchInput,
    SearchButton,
    SearchHistory,
    HistoryItem,
    ClearButton
} from '../styles/MarketplaceSearchStyles';
import { useMarketplaceSearch } from '../utils/MarketplaceSearchUtils';

function MarketplaceSearchComp() {
    const { theme } = useTheme();
    const {
        searchTerm,
        searchHistory,
        showHistory,
        handleSearch,
        handleHistoryClick,
        clearHistory,
        clearSearch
    } = useMarketplaceSearch();

    return (
        <SearchContainer theme={theme}>
            <InputGroup>
                <SearchInput
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setShowHistory(true)}
                />
                {searchTerm && (
                    <ClearButton onClick={clearSearch}>
                        <FontAwesomeIcon icon={faTimes} />
                    </ClearButton>
                )}
                <SearchButton theme={theme}>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchButton>
            </InputGroup>

            {showHistory && searchHistory.length > 0 && (
                <SearchHistory>
                    {searchHistory.map((item, index) => (
                        <HistoryItem 
                            key={index}
                            onClick={() => handleHistoryClick(item)}
                        >
                            <FontAwesomeIcon icon={faHistory} className="me-2" />
                            {item}
                        </HistoryItem>
                    ))}
                    <button 
                        className="clear-history"
                        onClick={clearHistory}
                    >
                        Limpar histórico
                    </button>
                </SearchHistory>
            )}
        </SearchContainer>
    );
}

export default MarketplaceSearchComp;
