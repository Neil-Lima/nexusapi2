import styled from 'styled-components';

export const StatsContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: ${props => props.theme.boxShadow};
`;

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    transition: ${props => props.theme.transition};

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: ${props => props.theme.borderRadius};
    }
`;

export const StatIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    margin-right: 1rem;
`;

export const StatInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StatLabel = styled.span`
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
`;

export const StatValue = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
