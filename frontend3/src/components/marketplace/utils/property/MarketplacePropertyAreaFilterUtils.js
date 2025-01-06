'use client';
import { useState } from 'react';

export const useMarketplacePropertyAreaFilter = () => {
    const [areaRange, setAreaRange] = useState({
        min: '',
        max: ''
    });

    const handleAreaChange = (type, value) => {
        setAreaRange(prev => ({
            ...prev,
            [type]: value
        }));
    };

    return {
        areaRange,
        handleAreaChange
    };
};
