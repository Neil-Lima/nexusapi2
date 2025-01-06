import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const FilterContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1.5rem;
    backdrop-filter: blur(10px);
`;

export const FilterSection = styled.div`
    margin-bottom: 2rem;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const FilterTitle = styled.h5`
    color: #ffffff;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
`;

export const PriceRangeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        background: rgba(255,255,255,0.1);
        border: none;
        color: #ffffff;
        width: 100%;
    }

    span {
        color: rgba(255,255,255,0.7);
    }
`;

export const FilterCheckbox = styled(Form.Check)`
    margin-bottom: 0.5rem;
    color: #ffffff;

    .form-check-input {
        background-color: rgba(255,255,255,0.1);
        border-color: rgba(255,255,255,0.2);

        &:checked {
            background-color: ${props => props.theme.primaryColor};
            border-color: ${props => props.theme.primaryColor};
        }
    }

    .form-check-label {
        display: flex;
        align-items: center;
    }
`;

export const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StarIcon = styled.span`
    color: ${props => props.active ? '#ffc107' : '#e4e5e9'};
    margin-right: 2px;
`;
