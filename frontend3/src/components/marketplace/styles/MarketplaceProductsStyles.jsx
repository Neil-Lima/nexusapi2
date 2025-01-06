import styled from 'styled-components';

export const ProductsContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    padding: 2rem;
    color: white;
`;

export const ProductsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

export const ViewToggle = styled.button`
    background: ${props => props.active ? 
        `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
        'rgba(255,255,255,0.1)'
    };
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const SortButton = styled.button`
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 25px;
    padding: 0.75rem 1.5rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const ProductsGrid = styled.div`
    margin-bottom: 2rem;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;

    button {
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
        color: white;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: ${props => props.theme.boxShadow};
        }

        &.active {
            background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        }
    }
`;
