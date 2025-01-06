'use client';
import styled from 'styled-components';

export const MatchCard = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const ListViewCard = styled(MatchCard)`
 border-radius: ${props => props.theme.borderRadius};
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  margin-bottom: 20px;
  height: 200px;
`;

export const CardImage = styled.div`
  position: relative;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ListViewImage = styled(CardImage)`
  width: 200px;
  height: 100%;
  flex-shrink: 0;
`;

export const UserStatus = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: ${props => props.online ? 'rgba(46, 213, 115, 0.8)' : 'rgba(255, 71, 87, 0.8)'};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
`;

export const CardContent = styled.div`
  padding: 20px;
  
  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 10px 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const ListViewContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  
  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 10px 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const CardTitle = styled.div`
  h4 {
    color: white;
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const InfoList = styled.div`
  color: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px 0;
`;

export const InfoItem = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: ${props => props.theme.primaryColor};
  }
`;

export const WhatsappButton = styled.button`
  width: 100%;
  background: #25D366;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }
`;
