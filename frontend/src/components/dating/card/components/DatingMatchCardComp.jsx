'use client';
import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWhatsapp, faEye, faCamera, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  MatchCard,
  CardImage,
  UserStatus,
  CardContent,
  CardTitle,
  InfoList,
  InfoItem,
  WhatsappButton,
  ListViewCard,
  ListViewImage,
  ListViewContent
} from '../styles/DatingMatchCardStyles';
import { useDatingMatchCard } from '../utils/DatingMatchCardUtils';

export default function DatingMatchCardComp({ viewMode }) {
  const { theme } = useTheme();
  const { matches, handleWhatsappClick, handleCardClick } = useDatingMatchCard();

  if (viewMode === 'list') {
    return (
      <>
        {matches.map((match) => (
          <Col xs={12} key={match.id}>
            <ListViewCard theme={theme} onClick={() => handleCardClick(match.id)}>
              <ListViewImage>
                <img src={match.photo} alt={match.name} />
                <UserStatus online={match.isOnline}>
                  {match.isOnline ? 'Online' : `Offline há ${match.lastSeen}`}
                </UserStatus>
              </ListViewImage>

              <ListViewContent>
                <CardTitle>
                  <h4>{match.name} {match.nickname && `(${match.nickname})`}</h4>
                </CardTitle>

                <p>{match.bio}</p>

                <InfoList>
                  <InfoItem>
                    <FontAwesomeIcon icon={faStar} />
                    <strong>Idade:</strong> {match.age}
                  </InfoItem>
                  <InfoItem>
                    <FontAwesomeIcon icon={faCamera} />
                    <strong>Fotos:</strong> {match.photosCount}
                  </InfoItem>
                  <InfoItem>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <strong>Local:</strong> {match.location}
                  </InfoItem>
                  <InfoItem>
                    <FontAwesomeIcon icon={faEye} />
                    <strong>Visualizações:</strong> {match.views}
                  </InfoItem>
                </InfoList>

                <WhatsappButton onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsappClick(match.whatsapp);
                }}>
                  <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                </WhatsappButton>
              </ListViewContent>
            </ListViewCard>
          </Col>
        ))}
      </>
    );
  }

  return (
    <>
      {matches.map((match) => (
        <Col lg={4} md={6} sm={12} key={match.id}>
          <MatchCard theme={theme} onClick={() => handleCardClick(match.id)}>
            <CardImage>
              <img src={match.photo} alt={match.name} />
              <UserStatus online={match.isOnline}>
                {match.isOnline ? 'Online' : `Offline há ${match.lastSeen}`}
              </UserStatus>
            </CardImage>

            <CardContent>
              <CardTitle>
                <h4>{match.name} {match.nickname && `(${match.nickname})`}</h4>
              </CardTitle>

              <p>{match.bio}</p>

              <InfoList>
                <InfoItem>
                  <FontAwesomeIcon icon={faStar} />
                  <strong>Idade:</strong> {match.age}
                </InfoItem>
                <InfoItem>
                  <FontAwesomeIcon icon={faCamera} />
                  <strong>Fotos:</strong> {match.photosCount}
                </InfoItem>
                <InfoItem>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <strong>Local:</strong> {match.location}
                </InfoItem>
                <InfoItem>
                  <FontAwesomeIcon icon={faEye} />
                  <strong>Visualizações:</strong> {match.views}
                </InfoItem>
              </InfoList>

              <WhatsappButton onClick={(e) => {
                e.stopPropagation();
                handleWhatsappClick(match.whatsapp);
              }}>
                <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
              </WhatsappButton>
            </CardContent>
          </MatchCard>
        </Col>
      ))}
    </>
  );
}