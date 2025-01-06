'use client';
import { useState } from 'react';

export const useMarketplacePropertySort = () => {
    const [sortOption, setSortOption] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    const handleSortChange = (value) => {
        setSortOption(value);
    };

    const handleViewChange = (mode) => {
        setViewMode(mode);
    };

    return {
        sortOption,
        viewMode,
        handleSortChange,
        handleViewChange
    };
};
