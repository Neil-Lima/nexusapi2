'use client';
import { useRouter } from 'next/navigation';

export const useMarketplaceProductCard = (product) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/marketplace/properties/${product.id}`);
    };

    const handleLike = (e) => {
        e.stopPropagation();
        // Implementar lógica de like
    };

    const handleComment = (e) => {
        e.stopPropagation();
        // Implementar lógica de comentário
    };

    const handleShare = (e) => {
        e.stopPropagation();
        // Implementar lógica de compartilhamento
    };

    return {
        handleCardClick,
        handleLike,
        handleComment,
        handleShare
    };
};
