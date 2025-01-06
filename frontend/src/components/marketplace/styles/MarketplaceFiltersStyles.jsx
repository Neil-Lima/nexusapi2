import styled from 'styled-components';

export const FiltersContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1.5rem;
    color: white;

    .clear-filters {
        width: 100%;
        background: none;
        border: none;
        color: ${props => props.theme.primaryColor};
        padding: 0.5rem;
        margin-top: 1rem;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const FilterSection = styled.div`
    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const FilterHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    h5 {
        margin: 0;
        font-size: 1.1rem;
    }
`;

export const FilterBody = styled.div`
    .form-check {
        margin-bottom: 0.5rem;
        
        .form-check-input {
            background-color: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.2);

            &:checked {
                background-color: ${props => props.theme.primaryColor};
                border-color: ${props => props.theme.primaryColor};
            }
        }

        .form-check-label {
            color: rgba(255,255,255,0.9);
        }
    }
`;

export const PriceRange = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        flex: 1;
        background: rgba(255,255,255,0.1);
        border: none;
        padding: 0.5rem;
        border-radius: ${props => props.theme.borderRadius};
        color: white;
        
        &::placeholder {
            color: rgba(255,255,255,0.5);
        }
    }

    span {
        color: rgba(255,255,255,0.7);
    }
`;

export const RatingStars = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: ${props => props.theme.borderRadius};
        transition: all 0.2s ease;

        &:hover, &.active {
            background: rgba(255,255,255,0.1);
        }

        svg {
            color: #ffc107;
        }

        span {
            margin-left: 0.5rem;
            font-size: 0.9rem;
            color: rgba(255,255,255,0.7);
        }
    }
`;

export const FilterTag = styled.button`
    background: ${props => props.selected ? 
        `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
        'rgba(255,255,255,0.1)'
    };
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    color: white;
    margin: 0.25rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        background: ${props => props.selected ?
            `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
            'rgba(255,255,255,0.2)'
        };
    }
`;

export const ApplyButton = styled.button`
    width: 100%;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    border-radius: 25px;
    padding: 1rem;
    color: white;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;
