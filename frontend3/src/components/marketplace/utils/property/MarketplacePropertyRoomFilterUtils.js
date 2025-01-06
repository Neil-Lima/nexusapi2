'use client';
import { useState } from 'react';

export const useMarketplacePropertyRoomFilter = () => {
    const [filters, setFilters] = useState({
        bedrooms: null,
        bathrooms: null,
        parking: null
    });

    const handleFilterSelect = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: prev[type] === value ? null : value
        }));
    };

    return {
        filters,
        handleFilterSelect
    };
};
