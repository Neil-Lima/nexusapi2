'use client';
import { useState } from 'react';

export const useMarketplacePropertyMain = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [filters, setFilters] = useState({});

    const handleSearch = (searchTerm) => {
        console.log('Searching:', searchTerm);
    };

    const handleFilter = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    return {
        viewMode,
        filters,
        handleSearch,
        handleFilter
    };
};
