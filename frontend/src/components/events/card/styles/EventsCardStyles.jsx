// EventsCardStyles.jsx
'use client';
import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const ListViewContainer = styled(CardContainer)`
  flex-direction: row;
  align-items: center;
  height: 100px;
  padding: 10px;
  gap: 15px;
`;

export const ListViewImage = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const ListViewContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ListViewInfo = styled.div`
  display: flex;
  gap: 15px;
`;

export const ListViewActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const CardTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CardInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.7);
  
  svg {
    color: ${props => props.theme.primaryColor};
    flex-shrink: 0;
  }
  
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  min-width: 0;
`;

export const AttendeesList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AttendeeAvatar = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

export const InterestButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: 20px;
  padding: ${props => props.listView ? '8px' : '8px 16px'};
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.boxShadow};
  }
  
  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
`;
