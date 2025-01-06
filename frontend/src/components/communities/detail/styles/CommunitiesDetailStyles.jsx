'use client';
import styled from 'styled-components';

export const DetailContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  margin: 20px;
`;

export const DetailHeader = styled.div`
  position: relative;
  padding-bottom: 80px;
`;

export const CommunityBanner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CommunityAvatar = styled.img`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 120px;
  height: 120px;
  border-radius: 15px;
  border: 4px solid ${props => props.theme.cardBackground};
  background: ${props => props.theme.cardBackground};
`;

export const CommunityInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 160px;
  right: 20px;
`;

export const CommunityTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 2rem;
`;

export const CommunityStats = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const StatItem = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  
  svg {
    color: ${props => props.theme.primaryColor};
  }
`;

export const DetailContent = styled.div`
  padding: 20px;
`;

export const DetailSection = styled.div`
  margin-bottom: 30px;
  
  h3 {
    color: white;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

export const OwnerSection = styled(DetailSection)``;

export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  h4 {
    margin: 0;
    color: white;
  }
  
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ActionButton = styled.button`
color: ${props => props.theme.primaryColor};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
   
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.secondaryColor}, ${props.theme.primaryColor})` : 
      'rgba(255, 255, 255, 0.15)'
    };
  }
`;

export const SocialStats = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const SocialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  svg {
    color: ${props => props.theme.primaryColor};
  }
`;
