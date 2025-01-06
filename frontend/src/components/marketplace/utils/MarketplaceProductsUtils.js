import { useState } from 'react';

export const useMarketplaceProducts = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('popular');

    const products = [
        {
            id: 1,
            name: 'Smartphone XYZ',
            price: 2499.99,
            image: 'https://picsum.photos/400/400',
            rating: 4.5,
            reviews: 128,
            seller: {
                name: 'Tech Store',
                rating: 4.8
            }
        },
        {
            id: 2,
            name: 'Notebook Pro',
            price: 4999.99,
            image: 'https://picsum.photos/401/400',
            rating: 4.8,
            reviews: 256,
            seller: {
                name: 'Mega Electronics',
                rating: 4.9
            }
        },
        {
            id: 3,
            name: 'Smartwatch Elite',
            price: 899.99,
            image: 'https://picsum.photos/402/400',
            rating: 4.3,
            reviews: 64,
            seller: {
                name: 'Digital World',
                rating: 4.7
            }
        },
        // Adicione mais produtos conforme necessário
    ];

    const itemsPerPage = 9;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const toggleViewMode = (mode) => {
        setViewMode(mode);
    };

    const sortProducts = () => {
        setSortOrder(prev => {
            switch(prev) {
                case 'popular':
                    return 'price_asc';
                case 'price_asc':
                    return 'price_desc';
                case 'price_desc':
                    return 'rating';
                default:
                    return 'popular';
            }
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return {
        products,
        viewMode,
        currentPage,
        totalPages,
        toggleViewMode,
        sortProducts,
        handlePageChange
    };
};
