'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faReply, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
    ReviewsContainer,
    ReviewHeader,
    RatingOverview,
    RatingBars,
    RatingBar,
    ReviewList,
    ReviewCard,
    UserInfo,
    ReviewContent,
    ReviewActions,
    ActionButton,
    ReviewForm
} from '../styles/MarketplaceReviewsStyles';
import { useMarketplaceReviews } from '../utils/MarketplaceReviewsUtils';

function MarketplaceReviewsComp() {
    const { theme } = useTheme();
    const {
        reviews,
        ratingStats,
        averageRating,
        userReview,
        handleLikeReview,
        handleReplyToReview,
        handleReportReview,
        handleSubmitReview
    } = useMarketplaceReviews();

    return (
        <ReviewsContainer theme={theme}>
            <ReviewHeader>
                <h3>Avaliações do Produto</h3>
                <RatingOverview>
                    <div className="average-rating">
                        <h2>{averageRating}</h2>
                        <div className="stars">
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon 
                                    key={index}
                                    icon={faStar}
                                    color={index < Math.floor(averageRating) ? '#ffc107' : '#e4e5e9'}
                                />
                            ))}
                        </div>
                        <span>{reviews.length} avaliações</span>
                    </div>
                    <RatingBars>
                        {Object.entries(ratingStats).reverse().map(([rating, percentage]) => (
                            <RatingBar key={rating} percentage={percentage} theme={theme}>
                                <span>{rating} estrelas</span>
                                <div className="bar">
                                    <div className="fill" />
                                </div>
                                <span>{percentage}%</span>
                            </RatingBar>
                        ))}
                    </RatingBars>
                </RatingOverview>
            </ReviewHeader>

            <ReviewList>
                {reviews.map((review) => (
                    <ReviewCard key={review.id} theme={theme}>
                        <UserInfo>
                            <img src={review.user.avatar} alt={review.user.name} />
                            <div>
                                <h5>{review.user.name}</h5>
                                <div className="stars">
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon 
                                            key={index}
                                            icon={faStar}
                                            color={index < review.rating ? '#ffc107' : '#e4e5e9'}
                                        />
                                    ))}
                                </div>
                                <span>{review.date}</span>
                            </div>
                        </UserInfo>
                        <ReviewContent>
                            <p>{review.content}</p>
                            {review.images?.length > 0 && (
                                <div className="review-images">
                                    {review.images.map((image, index) => (
                                        <img key={index} src={image} alt={`Review ${index + 1}`} />
                                    ))}
                                </div>
                            )}
                        </ReviewContent>
                        <ReviewActions>
                            <ActionButton 
                                onClick={() => handleLikeReview(review.id)}
                                active={review.liked}
                                theme={theme}
                            >
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span>{review.likes}</span>
                            </ActionButton>
                            <ActionButton 
                                onClick={() => handleReplyToReview(review.id)}
                                theme={theme}
                            >
                                <FontAwesomeIcon icon={faReply} />
                                <span>Responder</span>
                            </ActionButton>
                            <ActionButton 
                                onClick={() => handleReportReview(review.id)}
                                theme={theme}
                            >
                                <FontAwesomeIcon icon={faFlag} />
                                <span>Reportar</span>
                            </ActionButton>
                        </ReviewActions>
                    </ReviewCard>
                ))}
            </ReviewList>

            <ReviewForm onSubmit={handleSubmitReview} theme={theme}>
                <h4>Deixe sua avaliação</h4>
                <div className="rating-select">
                    {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon 
                            key={index}
                            icon={faStar}
                            color={index < userReview.rating ? '#ffc107' : '#e4e5e9'}
                            onClick={() => handleRatingSelect(index + 1)}
                        />
                    ))}
                </div>
                <textarea 
                    placeholder="Compartilhe sua experiência com o produto..."
                    value={userReview.content}
                    onChange={(e) => handleReviewChange(e.target.value)}
                />
                <button type="submit">Enviar Avaliação</button>
            </ReviewForm>
        </ReviewsContainer>
    );
}

export default MarketplaceReviewsComp;
