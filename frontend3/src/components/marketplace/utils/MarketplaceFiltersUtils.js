'use client';
import { useState } from 'react';

export const useMarketplaceFilters = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        sort: 'relevance',
        categories: [],
        rating: 0,
    });

    const [priceRange, setPriceRange] = useState({
        min: '',
        max: ''
    });

    const filters = {
        sortOptions: [
            { label: 'Relevância', value: 'relevance' },
            { label: 'Menor Preço', value: 'price_asc' },
            { label: 'Maior Preço', value: 'price_desc' },
            { label: 'Mais Vendidos', value: 'best_selling' },
            { label: 'Mais Recentes', value: 'newest' }
        ],
        categories: [
            { id: 1, name: 'Eletrônicos' },
            { id: 2, name: 'Moda' },
            { id: 3, name: 'Casa e Decoração' },
            { id: 4, name: 'Esportes' },
            { id: 5, name: 'Beleza' },
            { id: 6, name: 'Livros' },
            { id: 7, name: 'Games' },
            { id: 8, name: 'Automotivo' }
        ]
    };

    const handleFilterChange = (type, value) => {
        setSelectedFilters(prev => {
            if (type === 'categories') {
                const newCategories = prev.categories.includes(value)
                    ? prev.categories.filter(id => id !== value)
                    : [...prev.categories, value];
                return { ...prev, categories: newCategories };
            }
            return { ...prev, [type]: value };
        });
    };

    const handlePriceChange = (type, value) => {
        setPriceRange(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleRatingChange = (rating) => {
        setSelectedFilters(prev => ({
            ...prev,
            rating: prev.rating === rating ? 0 : rating
        }));
    };

    const applyFilters = () => {
        // Implement filter application logic
        console.log('Applying filters:', { selectedFilters, priceRange });
    };

    const clearFilters = () => {
        setSelectedFilters({
            sort: 'relevance',
            categories: [],
            rating: 0
        });
        setPriceRange({ min: '', max: '' });
    };

    return {
        filters,
        selectedFilters,
        priceRange,
        handleFilterChange,
        handlePriceChange,
        handleRatingChange,
        applyFilters,
        clearFilters
    };
};
