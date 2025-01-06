import { useState } from 'react';

export const useMarketplaceUserProfile = () => {
    const [userProfile] = useState({
        name: 'João Silva',
        role: 'Vendedor Premium',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    });

    const [profileStats] = useState([
        { label: 'Vendas', value: '258' },
        { label: 'Avaliação', value: '4.9' },
        { label: 'Produtos', value: '45' }
    ]);

    return {
        userProfile,
        profileStats
    };
};
