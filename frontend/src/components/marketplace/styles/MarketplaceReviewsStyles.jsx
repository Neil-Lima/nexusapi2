import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
    color: white;
`;

export const ReviewHeader = styled.div`
    margin-bottom: 2rem;

    h3 {
        margin-bottom: 1.5rem;
        font-weight: 600;
    }
`;

export const RatingOverview = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    .average-rating {
        text-align: center;
        min-width: 150px;
        
        h2 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
            background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .stars {
            margin-bottom: 0.5rem;
        }

        span {
            color: rgba(255,255,255,0.7);
            font-size: 0.9rem;
        }
    }
`;

export const RatingBars = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const RatingBar = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
        min-width: 80px;
        color: rgba(255,255,255,0.7);
    }

    .bar {
        flex: 1;
        height: 8px;
        background: rgba(255,255,255,0.1);
        border-radius: 4px;
        overflow: hidden;

        .fill {
            height: 100%;
            width: ${props => props.percentage}%;
            background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
            transition: width 0.3s ease;
        }
    }
`;

export const ReviewList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
`;

export const ReviewCard = styled.div`
    background: rgba(255,255,255,0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.primaryColor};
    }

    h5 {
        margin: 0;
        font-weight: 600;
    }

    .stars {
        margin: 0.25rem 0;
    }

    span {
        font-size: 0.9rem;
        color: rgba(255,255,255,0.7);
    }
`;

export const ReviewContent = styled.div`
    margin-bottom: 1rem;

    p {
        margin: 0;
        line-height: 1.6;
    }

    .review-images {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        overflow-x: auto;
        padding-bottom: 0.5rem;

        img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: ${props => props.theme.borderRadius};
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;

export const ReviewActions = styled.div`
    display: flex;
    gap: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 1rem;
`;

export const ActionButton = styled.button`
    background: none;
    border: none;
    color: ${props => props.active ? props.theme.primaryColor : 'white'};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 20px;

    &:hover {
        background: rgba(255,255,255,0.1);
        color: ${props => props.theme.primaryColor};
    }

    span {
        font-size: 0.9rem;
    }
`;

export const ReviewForm = styled.form`
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);

    h4 {
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    .rating-select {
        margin-bottom: 1.5rem;
        
        svg {
            font-size: 1.5rem;
            cursor: pointer;
            margin-right: 0.5rem;
            transition: all 0.2s ease;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    textarea {
        width: 100%;
        height: 150px;
        background: rgba(255,255,255,0.1);
        border: none;
        border-radius: ${props => props.theme.borderRadius};
        padding: 1rem;
        color: white;
        margin-bottom: 1.5rem;
        resize: none;

        &::placeholder {
            color: rgba(255,255,255,0.5);
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 2px ${props => props.theme.primaryColor};
        }
    }

    button {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        border: none;
        border-radius: 25px;
        padding: 1rem 2rem;
        color: white;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: ${props => props.theme.boxShadow};
        }
    }
`;
