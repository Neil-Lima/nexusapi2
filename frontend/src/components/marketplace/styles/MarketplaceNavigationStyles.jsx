import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const NavigationContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: ${props => props.theme.boxShadow};
`;

export const NavigationItem = styled(ListGroup.Item)`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: transparent;
    border: none;
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(5px);
    }
`;

export const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    margin-right: 1rem;
    box-shadow: ${props => props.theme.boxShadow};
`;

export const ItemText = styled.span`
    font-size: 1rem;
    font-weight: 500;
`;
