'use client';
import styled from 'styled-components';

export const VisitorButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const VisitorsModalContainer = styled.div`
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;

  .modal-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    .btn-close {
      color: white;
      filter: brightness(0) invert(1);
    }
  }
`;

export const VisitorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 400px;
  overflow-y: auto;
`;

export const VisitorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const VisitorAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
`;

export const VisitorInfo = styled.div`
  flex: 1;

  h5 {
    margin: 0;
    color: white;
    font-size: 1rem;
  }
`;

export const VisitTime = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;
