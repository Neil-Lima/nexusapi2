import styled from 'styled-components';

export const ModalContainer = styled.div`
    background: ${props => props.theme.cardBackground};
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
`;

export const ModalContent = styled.div`
    padding: 2rem;
    color: white;
`;

export const ImageGallery = styled.div`
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
    margin-bottom: 2rem;

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
`;

export const ProductDetails = styled.div`
    h2 {
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }

    p {
        color: rgba(255,255,255,0.8);
        margin-bottom: 2rem;
    }
`;

export const PriceSection = styled.div`
    margin-bottom: 2rem;

    h3 {
        font-size: 2rem;
        font-weight: bold;
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
    }

    .payment-methods {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(255,255,255,0.7);
    }
`;

export const SellerSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background: rgba(255,255,255,0.1);
    border-radius: ${props => props.theme.borderRadius};

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .rating {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        span {
            margin-left: 0.5rem;
            color: rgba(255,255,255,0.7);
        }
    }
`;

export const GuaranteeSection = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(255,255,255,0.8);
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
`;

export const PrimaryButton = styled.button`
    flex: 2;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    border-radius: 25px;
    padding: 1rem;
    color: white;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.boxShadow};
    }
`;

export const SecondaryButton = styled.button`
    flex: 1;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 25px;
    padding: 1rem;
    color: white;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255,255,255,0.2);
        transform: translateY(-2px);
    }
`;

export const IconButton = styled.button`
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
        transform: translateY(-2px);
    }
`;

export const QuestionsSection = styled.div`
    margin-bottom: 2rem;

    h4 {
        margin-bottom: 1rem;
    }
`;

export const QuestionItem = styled.div`
    background: rgba(255,255,255,0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 1rem;
    margin-bottom: 1rem;

    .question {
        margin-bottom: 0.5rem;
    }

    .answer {
        color: rgba(255,255,255,0.8);
    }
`;

export const SimilarProducts = styled.div`
    h4 {
        margin-bottom: 1rem;
    }
`;
