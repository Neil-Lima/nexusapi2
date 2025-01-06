'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faBriefcase, 
  faGraduationCap, 
  faEnvelope, 
  faPhone, 
  faBirthdayCake,
  faEdit 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  AboutContainer,
  AboutCard,
  InfoItem,
  InfoIcon,
  InfoContent,
  InfoTitle,
  InfoDetail,
  EditButton
} from '../styles/ProfileuserAboutStyles';

export function ProfileuserAboutComp() {
  const { theme } = useTheme();
  const userInfo = {
    location: 'São Paulo, SP',
    profession: 'Software Developer',
    education: 'Computer Science - USP',
    email: 'john.doe@email.com',
    phone: '+55 (11) 99999-9999',
    birthday: '15 de Janeiro de 1990'
  };

  const handleEdit = (field) => {
    console.log(`Editing ${field}`);
  };

  return (
    <AboutContainer theme={theme}>
      <AboutCard theme={theme}>
        <Card.Header>
          <h4>Informações Pessoais</h4>
        </Card.Header>
        <Card.Body>
          <InfoItem theme={theme}>
            <InfoIcon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Localização</InfoTitle>
              <InfoDetail>{userInfo.location}</InfoDetail>
            </InfoContent>
            <EditButton onClick={() => handleEdit('location')}>
              <FontAwesomeIcon icon={faEdit} />
            </EditButton>
          </InfoItem>

          <InfoItem theme={theme}>
            <InfoIcon>
              <FontAwesomeIcon icon={faBriefcase} />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Profissão</InfoTitle>
              <InfoDetail>{userInfo.profession}</InfoDetail>
            </InfoContent>
            <EditButton onClick={() => handleEdit('profession')}>
              <FontAwesomeIcon icon={faEdit} />
            </EditButton>
          </InfoItem>

          <InfoItem theme={theme}>
            <InfoIcon>
              <FontAwesomeIcon icon={faGraduationCap} />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Educação</InfoTitle>
              <InfoDetail>{userInfo.education}</InfoDetail>
            </InfoContent>
            <EditButton onClick={() => handleEdit('education')}>
              <FontAwesomeIcon icon={faEdit} />
            </EditButton>
          </InfoItem>

          <InfoItem theme={theme}>
            <InfoIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Email</InfoTitle>
              <InfoDetail>{userInfo.email}</InfoDetail>
            </InfoContent>
            <EditButton onClick={() => handleEdit('email')}>
              <FontAwesomeIcon icon={faEdit} />
            </EditButton>
          </InfoItem>

          <InfoItem theme={theme}>
            <InfoIcon>
              <FontAwesomeIcon icon={faPhone} />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Telefone</InfoTitle>
              <InfoDetail>{userInfo.phone}</InfoDetail>
            </InfoContent>
            <EditButton onClick={() => handleEdit('phone')}>
              <FontAwesomeIcon icon={faEdit} />
            </EditButton>
          </InfoItem>

          <InfoItem theme={theme}>
            <InfoIcon>
              <FontAwesomeIcon icon={faBirthdayCake} />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>Aniversário</InfoTitle>
              <InfoDetail>{userInfo.birthday}</InfoDetail>
            </InfoContent>
            <EditButton onClick={() => handleEdit('birthday')}>
              <FontAwesomeIcon icon={faEdit} />
            </EditButton>
          </InfoItem>
        </Card.Body>
      </AboutCard>
    </AboutContainer>
  );
}
