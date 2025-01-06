'use client';
import { useState } from 'react';

export const useMarketplacePropertySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [locations] = useState([
        'Belém PA',
        'Umarizal',
        'Nazaré',
        'Marco',
        'Pedreira',
        'Sacramenta'
    ]);

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const handleLocationSelect = (location) => {
        setSearchTerm(location);
    };

    return {
        searchTerm,
        locations,
        handleSearchChange,
        handleLocationSelect
    };
};
