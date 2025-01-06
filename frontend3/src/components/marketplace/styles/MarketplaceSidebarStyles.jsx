import styled from 'styled-components';

export const SidebarContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const UserSection = styled.div`
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 1rem;
        border: 3px solid ${props => props.theme.primaryColor};
    }

    h4 {
        color: white;
        margin-bottom: 0.5rem;
    }

    p {
        color: rgba(255,255,255,0.7);
        margin: 0;
    }
`;

export const NavigationList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const NavItem = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: ${props => props.active ? 
        `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
        'rgba(255,255,255,0.1)'
    };
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    transition: all 0.3s ease;

    &:hover {
        transform: translateX(5px);
        background: ${props => props.active ?
            `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
            'rgba(255,255,255,0.2)'
        };
    }
`;

export const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
`;

export const StatsSection = styled.div`
    margin-top: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

export const StatItem = styled.div`
    background: rgba(255,255,255,0.1);
    padding: 1rem;
    border-radius: ${props => props.theme.borderRadius};
    text-align: center;

    .label {
        display: block;
        font-size: 0.8rem;
        color: rgba(255,255,255,0.7);
        margin-bottom: 0.5rem;
    }

    .value {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
