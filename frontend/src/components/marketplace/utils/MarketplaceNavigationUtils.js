'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
    faHome, 
    faStore, 
    faHeart, 
    faHistory, 
    faCog, 
    faShoppingCart, 
    faTag 
} from '@fortawesome/free-solid-svg-icons';

export const useMarketplaceNavigation = () => {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('home');

    const navigationItems = [
        { id: 'home', label: 'Início', icon: faHome, path: '/marketplace' },
        { id: 'store', label: 'Minha Loja', icon: faStore, path: '/marketplace/store' },
        { id: 'orders', label: 'Pedidos', icon: faShoppingCart, path: '/marketplace/orders' },
        { id: 'favorites', label: 'Favoritos', icon: faHeart, path: '/marketplace/favorites' },
        { id: 'history', label: 'Histórico', icon: faHistory, path: '/marketplace/history' },
        { id: 'promotions', label: 'Promoções', icon: faTag, path: '/marketplace/promotions' },
        { id: 'settings', label: 'Configurações', icon: faCog, path: '/marketplace/settings' }
    ];

    const handleNavigation = (itemId) => {
        setActiveItem(itemId);
        const item = navigationItems.find(item => item.id === itemId);
        if (item?.path) {
            router.push(item.path);
        }
    };

    return {
        navigationItems,
        activeItem,
        handleNavigation
    };
};
