'use client';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    box-shadow: ${props => props.theme.boxShadow};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
`;

export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    border: 4px solid ${props => props.theme.primaryColor};
    padding: 3px;
    background: #ffffff;
    object-fit: cover;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        border-color: ${props => props.theme.secondaryColor};
    }
`;

export const ProfileInfo = styled.div`
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    backdrop-filter: blur(5px);
`;

export const ProfileName = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ProfileRole = styled.p`
    color: #ffffff;
    margin: 0.5rem 0 0;
    font-size: 1rem;
    opacity: 0.9;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
`;

export const ProfileStats = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    border-radius: ${props => props.theme.borderRadius};
    padding: 1rem;
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
    }

    .value {
        font-size: 1.25rem;
        font-weight: 600;
        color: #ffffff;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        margin-bottom: 0.25rem;
    }

    .label {
        font-size: 0.875rem;
        color: #ffffff;
        opacity: 0.8;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
`;
