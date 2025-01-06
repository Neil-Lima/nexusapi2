// CommunitiesMembersStyles.jsx
'use client';
import styled from 'styled-components';

export const MembersContainer = styled.div`
 background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  margin-bottom: 20px;
`;

export const MembersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    
    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

export const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MemberAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MemberInfo = styled.div`
  h4 {
    margin: 0;
    color: white;
    font-size: 1rem;
  }
`;

export const MemberRole = styled.span`
  color: ${props => props.theme.primaryColor};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RankingItem = styled(MemberItem)`
  position: relative;
  padding-left: 50px;
`;

export const RankingPosition = styled.span`
  position: absolute;
  left: 15px;
  color: ${props => 
    props.position === 1 ? '#FFD700' :
    props.position === 2 ? '#C0C0C0' :
    props.position === 3 ? '#CD7F32' :
    'rgba(255, 255, 255, 0.7)'
  };
  font-weight: bold;
`;

export const RankingInfo = styled(MemberInfo)``;

export const RankingPoints = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.primaryColor};
`;
