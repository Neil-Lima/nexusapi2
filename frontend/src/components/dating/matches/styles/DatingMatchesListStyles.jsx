'use client';
import styled from 'styled-components';

export const MatchesContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  color: white;
`;

export const MatchesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 15px;
  margin-bottom: 20px;

  svg {
    color: rgba(255, 255, 255, 0.7);
  }

  input {
    flex: 1;
    background: none;
    border: none;
    color: white;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const FilterButton = styled.button`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const MatchesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

export const MatchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
`;

export const MatchAvatar = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const OnlineStatus = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.8rem;
  color: ${props => props.online ? '#4CAF50' : '#9e9e9e'};
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
`;

export const MatchInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const MatchName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LastMessage = styled.p`
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const MatchActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background: ${props => props.liked ? 
    '#ff4081' : 
    'rgba(255, 255, 255, 0.1)'
  };
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${props => props.liked ? 
      '#ff4081' : 
      `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`
    };
  }
`;

export const NoMatches = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: rgba(255, 255, 255, 0.5);

  svg {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }
`;
