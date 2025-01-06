'use client';
import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    padding: 2rem;
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 2rem;

    h3 {
        color: #ffffff;
        margin-bottom: 2rem;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
`;

export const CategoryCard = styled.div`
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    padding: 1.5rem;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition: ${props => props.theme.transition};
    box-shadow: ${props => props.theme.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    min-height: 180px;
    justify-content: center;

    &:hover {
        transform: ${props => props.theme.buttonHoverTransform};
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
`;

export const IconWrapper = styled.div`
    color: #ffffff;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }
`;

export const CategoryInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h4 {
        color: #ffffff;
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: 1.2rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }

    span {
        color: #ffffff;
        opacity: 0.9;
        font-size: 0.9rem;
        font-weight: 500;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
`;

export const ViewAllButton = styled.button`
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: #ffffff;
    border: none;
    padding: 1rem 2rem;
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 2rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: ${props => props.theme.boxShadow};
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        transform: ${props => props.theme.buttonHoverTransform};
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }

    &:active {
        transform: translateY(1px);
    }
`;
