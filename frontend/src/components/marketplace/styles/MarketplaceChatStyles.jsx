import styled from 'styled-components';

export const ChatContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    height: 600px;
    display: flex;
    flex-direction: column;
`;

export const ChatHeader = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    color: white;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 1rem;
    }

    h5 {
        margin: 0;
    }

    span {
        font-size: 0.9rem;
        color: rgba(255,255,255,0.7);
    }
`;

export const ChatMessages = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const MessageItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isSender ? 'flex-end' : 'flex-start'};

    .message-content {
        background: ${props => props.isSender ? 
            `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
            'rgba(255,255,255,0.1)'
        };
        padding: 0.75rem 1rem;
        border-radius: 20px;
        color: white;
        max-width: 70%;
    }

    .message-time {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.5);
        margin-top: 0.25rem;
    }
`;

export const ChatInput = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);

    input {
        flex: 1;
        background: rgba(255,255,255,0.1);
        border: none;
        padding: 0.75rem 1rem;
        border-radius: 25px;
        color: white;

        &::placeholder {
            color: rgba(255,255,255,0.5);
        }
    }
`;

export const InputActions = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const ActionButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${props => props.primary ? 
        `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})` :
        'rgba(255,255,255,0.1)'
    };
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        background: ${props => props.primary ?
            `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` :
            'rgba(255,255,255,0.2)'
        };
    }
`;

export const CloseButton = styled(ActionButton)`
    background: rgba(255,0,0,0.1);
    
    &:hover {
        background: rgba(255,0,0,0.2);
    }
`;

export const OptionsButton = styled(ActionButton)`
    background: rgba(255,255,255,0.1);
    
    &:hover {
        background: rgba(255,255,255,0.2);
    }
`;
