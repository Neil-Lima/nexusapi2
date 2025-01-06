'use client';
import { useState } from 'react';

export const useMarketplacePropertyPriceFilter = () => {
    const [priceRange, setPriceRange] = useState({
        min: '',
        max: ''
    });

    const handlePriceChange = (type, value) => {
        setPriceRange(prev => ({
            ...prev,
            [type]: value
        }));
    };

    return {
        priceRange,
        handlePriceChange
    };
};
