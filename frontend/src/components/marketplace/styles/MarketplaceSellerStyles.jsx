import styled from 'styled-components';

export const SellerContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
    color: white;

    h3 {
        margin: 2rem 0 1rem;
        font-weight: 600;
    }
`;

export const SellerHeader = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 3px solid ${props => props.theme.primaryColor};
    }
`;

export const SellerInfo = styled.div`
    flex: 1;

    .name-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;

        h2 {
            margin: 0;
        }
    }

    .rating {
        margin-bottom: 1rem;

        span {
            margin-left: 0.5rem;
            color: rgba(255,255,255,0.7);
        }
    }

    p {
        color: rgba(255,255,255,0.8);
        margin-bottom: 1.5rem;
    }

    .actions {
        display: flex;
        gap: 1rem;
    }
`;

export const VerifiedBadge = styled.div`
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const SellerStats = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255,255,255,0.1);
    border-radius: ${props => props.theme.borderRadius};
`;

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.primaryColor};
    }

    .label {
        display: block;
        font-size: 0.9rem;
        color: rgba(255,255,255,0.7);
    }

    .value {
        display: block;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
`;

export const ProductCard = styled.div`
    background: rgba(255,255,255,0.1);
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: ${props => props.theme.boxShadow};
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .product-info {
        padding: 1rem;

        h4 {
            margin: 0 0 0.5rem;
            font-size: 1rem;
        }

        .price {
            color: ${props => props.theme.primaryColor};
            font-weight: 600;
        }
    }
`;

export const ContactButton = styled.button`
    background: ${props => props.primary ? 
        `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
        'rgba(255,255,255,0.1)'
    };
    border: none;
    border-radius: 25px;
    padding: 0.75rem 1.5rem;
    color: white;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
        background: ${props => props.primary ?
            `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
            'rgba(255,255,255,0.2)'
        };
    }
`;
