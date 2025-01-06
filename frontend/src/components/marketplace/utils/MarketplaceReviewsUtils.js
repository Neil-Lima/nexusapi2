import { useState } from 'react';

export const useMarketplaceReviews = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            user: {
                name: 'João Silva',
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
            },
            rating: 5,
            content: 'Produto excelente! Superou todas as minhas expectativas. A qualidade é impressionante e o atendimento foi impecável.',
            date: '15/03/2024',
            likes: 12,
            liked: false,
            images: [
                'https://picsum.photos/400/300',
                'https://picsum.photos/401/300'
            ]
        },
        {
            id: 2,
            user: {
                name: 'Maria Santos',
                avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
            },
            rating: 4,
            content: 'Muito bom! Apenas alguns detalhes poderiam ser melhorados, mas no geral estou satisfeita com a compra.',
            date: '14/03/2024',
            likes: 8,
            liked: false,
            images: []
        },
        {
            id: 3,
            user: {
                name: 'Pedro Oliveira',
                avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
            },
            rating: 5,
            content: 'Perfeito! Entrega rápida e produto conforme descrito. Recomendo!',
            date: '13/03/2024',
            likes: 15,
            liked: true,
            images: [
                'https://picsum.photos/402/300'
            ]
        }
    ]);

    const [userReview, setUserReview] = useState({
        rating: 0,
        content: ''
    });

    const ratingStats = {
        5: 70,
        4: 20,
        3: 5,
        2: 3,
        1: 2
    };

    const averageRating = 4.5;

    const handleLikeReview = (reviewId) => {
        setReviews(reviews.map(review => 
            review.id === reviewId 
                ? { 
                    ...review, 
                    liked: !review.liked, 
                    likes: review.liked ? review.likes - 1 : review.likes + 1 
                }
                : review
        ));
    };

    const handleReplyToReview = (reviewId) => {
        const review = reviews.find(r => r.id === reviewId);
        console.log(`Respondendo à avaliação de ${review.user.name}`);
    };

    const handleReportReview = (reviewId) => {
        const review = reviews.find(r => r.id === reviewId);
        console.log(`Reportando avaliação de ${review.user.name}`);
    };

    const handleRatingSelect = (rating) => {
        setUserReview(prev => ({ ...prev, rating }));
    };

    const handleReviewChange = (content) => {
        setUserReview(prev => ({ ...prev, content }));
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        
        if (userReview.rating === 0) {
            alert('Por favor, selecione uma classificação');
            return;
        }

        if (!userReview.content.trim()) {
            alert('Por favor, escreva sua avaliação');
            return;
        }

        const newReview = {
            id: reviews.length + 1,
            user: {
                name: 'Usuário Atual',
                avatar: 'https://randomuser.me/api/portraits/men/99.jpg'
            },
            rating: userReview.rating,
            content: userReview.content,
            date: new Date().toLocaleDateString(),
            likes: 0,
            liked: false,
            images: []
        };

        setReviews([newReview, ...reviews]);
        setUserReview({ rating: 0, content: '' });
    };

    return {
        reviews,
        ratingStats,
        averageRating,
        userReview,
        handleLikeReview,
        handleReplyToReview,
        handleReportReview,
        handleSubmitReview,
        handleRatingSelect,
        handleReviewChange
    };
};
