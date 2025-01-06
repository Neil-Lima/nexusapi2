import { useState } from 'react';
import { faShoppingCart, faStore, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';

export const useMarketplaceStats = () => {
    const [stats] = useState([
        {
            icon: faShoppingCart,
            label: 'Total Vendas',
            value: '1.234'
        },
        {
            icon: faStore,
            label: 'Produtos',
            value: '156'
        },
        {
            icon: faUsers,
            label: 'Clientes',
            value: '892'
        },
        {
            icon: faChartLine,
            label: 'Crescimento',
            value: '+25%'
        }
    ]);

    return {
        stats
    };
};
