import { useState, useEffect } from 'react';

export const useMarketplaceSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        const savedHistory = localStorage.getItem('searchHistory');
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    const handleHistoryClick = (term) => {
        setSearchTerm(term);
        setShowHistory(false);
    };

    const clearHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem('searchHistory');
    };

    const clearSearch = () => {
        setSearchTerm('');
    };

    const saveToHistory = (term) => {
        const newHistory = [term, ...searchHistory.filter(item => item !== term)].slice(0, 5);
        setSearchHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    return {
        searchTerm,
        searchHistory,
        showHistory,
        handleSearch,
        handleHistoryClick,
        clearHistory,
        clearSearch,
        saveToHistory,
        setShowHistory
    };
};
