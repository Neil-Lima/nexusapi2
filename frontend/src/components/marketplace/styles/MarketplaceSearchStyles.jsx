import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
`;

export const SearchInput = styled(Form.Control)`
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    padding-right: 80px;
    height: 50px;

    &::placeholder {
        color: rgba(255,255,255,0.5);
    }

    &:focus {
        background: rgba(255,255,255,0.15);
        box-shadow: none;
        color: white;
    }
`;

export const SearchButton = styled.button`
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    color: white;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const ClearButton = styled.button`
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255,255,255,0.5);
    z-index: 2;
    padding: 0 10px;

    &:hover {
        color: white;
    }
`;

export const SearchHistory = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.cardBackground};
    border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
    padding: 1rem;
    margin-top: 5px;
    box-shadow: ${props => props.theme.boxShadow};
    z-index: 1000;

    .clear-history {
        background: none;
        border: none;
        color: ${props => props.theme.primaryColor};
        width: 100%;
        text-align: center;
        padding: 0.5rem;
        margin-top: 0.5rem;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const HistoryItem = styled.div`
    padding: 0.5rem;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: ${props => props.theme.borderRadius};

    &:hover {
        background: rgba(255,255,255,0.1);
    }
`;
