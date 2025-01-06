'use client';
import { useState } from 'react';

export const useMarketplacePropertyTypeFilter = () => {
    const [selectedType, setSelectedType] = useState('buy');
    const [propertyTypes] = useState([
        { id: 1, name: 'Casa' },
        { id: 2, name: 'Apartamento' },
        { id: 3, name: 'Terreno' },
        { id: 4, name: 'Comercial' },
        { id: 5, name: 'Rural' }
    ]);

    const handleTypeChange = (type) => {
        setSelectedType(type);
    };

    return {
        selectedType,
        propertyTypes,
        handleTypeChange
    };
};
