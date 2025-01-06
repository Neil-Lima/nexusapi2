import { useState } from 'react';

export const useMarketplaceSidebar = () => {
    const [activeItem, setActiveItem] = useState('store');

    const user = {
        name: 'John Doe',
        avatar: '/images/avatar.jpg',
        role: 'Vendedor Profissional'
    };

    const stats = {
        'Vendas Realizadas': '234',
        'Avaliação Média': '4.8',
        'Taxa de Resposta': '98%',
        'Produtos Ativos': '45'
    };

    const handleNavigation = (itemId) => {
        setActiveItem(itemId);
        // Implement navigation logic
    };

    return {
        user,
        stats,
        activeItem,
        handleNavigation
    };
};
