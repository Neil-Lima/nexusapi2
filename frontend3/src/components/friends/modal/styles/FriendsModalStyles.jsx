import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
    .modal-content {
        background: none;
        border: none;
        box-shadow: none;
    }

    .modal-dialog {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
`;

export const ModalOverlay = styled.div`
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border-radius: ${props => props.theme.borderRadius};
    padding: 1px;
`;

export const ModalContent = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    backdrop-filter: blur(20px);
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

export const ModalHeaderIcon = styled.div`
    font-size: 1.5rem;
    color: #ff3b30;
`;

export const ModalHeaderText = styled.h4`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ModalBody = styled.div`
    margin-bottom: 2rem;
`;

export const ModalBodyText = styled.p`
    margin: 0 0 1rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #ffffff;
`;

export const ModalBodyWarning = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

export const ConfirmButton = styled.button`
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 20px;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    transition: ${props => props.theme.transition};
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const CancelButton = styled.button`
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    transition: ${props => props.theme.transition};
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
