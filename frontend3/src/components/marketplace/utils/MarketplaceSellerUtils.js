import { useState } from 'react';

export const useMarketplaceSeller = () => {
    const [seller, setSeller] = useState({
        id: 1,
        name: 'Loja Tech Master',
        avatar: '/images/seller-avatar.jpg',
        verified: true,
        rating: 4.8,
        reviews: 1234,
        description: 'Especialista em produtos eletrônicos de alta qualidade. Atendimento personalizado e garantia em todos os produtos.',
        isFollowing: false,
        totalProducts: 456,
        totalSales: '10k+',
        responseTime: '< 1h',
        satisfactionRate: 98
    });

    const [sellerProducts] = useState([
        {
            id: 1,
            name: 'Smartphone XYZ',
            price: '2.499,00',
            image: '/images/product1.jpg'
        },
        // More products...
    ]);

    const handleContactSeller = () => {
        console.log('Contacting seller...');
    };

    const handleFollowSeller = () => {
        setSeller(prev => ({
            ...prev,
            isFollowing: !prev.isFollowing
        }));
    };

    const handleViewProduct = (productId) => {
        console.log('Viewing product:', productId);
    };

    return {
        seller,
        sellerProducts,
        handleContactSeller,
        handleFollowSeller,
        handleViewProduct
    };
};
