'use client';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHome, faUsers, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  ProfileCard,
  ProfileImage,
  ProfileInfo,
  StatsContainer,
  StatItem,
  StyledListGroup
} from '../styles/DatingProfileStyles';
import { useDatingProfile } from '../utils/DatingProfileUtils';

export default function DatingProfileComp() {
  const { theme } = useTheme();
  const { profile, handleEditProfile } = useDatingProfile();

  return (
    <>
      <ProfileCard theme={theme}>
        <ProfileImage>
          <img src={profile.avatar} alt={profile.name} />
        </ProfileImage>
        
        <ProfileInfo>
          <h4>{profile.name}</h4>
          <p>{profile.bio}</p>
          
          <Button 
            variant="primary" 
            className="w-100 mb-3"
            onClick={handleEditProfile}
          >
            <FontAwesomeIcon icon={faEdit} className="me-2" />
            Editar Perfil
          </Button>

          <StyledListGroup theme={theme}>
            <StyledListGroup.Item>
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <strong>Idade:</strong> {profile.age}
            </StyledListGroup.Item>
            <StyledListGroup.Item>
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <strong>Interesse:</strong> {profile.interest}
            </StyledListGroup.Item>
            <StyledListGroup.Item>
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <strong>Profissão:</strong> {profile.occupation}
            </StyledListGroup.Item>
            <StyledListGroup.Item>
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <strong>Local:</strong> {profile.location}
            </StyledListGroup.Item>
          </StyledListGroup>
        </ProfileInfo>
      </ProfileCard>

      <StatsContainer theme={theme}>
        <StatItem>
          <FontAwesomeIcon icon={faHome} />
          <span>{profile.visitCount}</span>
          <p>Visitas</p>
        </StatItem>
        <StatItem>
          <FontAwesomeIcon icon={faUsers} />
          <span>{profile.connectionsCount}</span>
          <p>Conexões</p>
        </StatItem>
      </StatsContainer>
    </>
  );
}
