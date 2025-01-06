'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faComments, faCalendarAlt, faHandshake, faStar, faBuilding } from '@fortawesome/free-solid-svg-icons';
import {
  HubContainer,
  HubCard,
  ConnectionsGrid,
  ConnectionCard,
  EventsSection,
  GroupsPanel,
  MessagesPanel,
  RecommendationsGrid
} from '../styles/JobsNetworkingHubStyles';
import { useNetworkingHub } from '../utils/JobsNetworkingHubUtils';

function JobsNetworkingHubComp() {
  const { theme } = useTheme();
  const {
    connections,
    events,
    groups,
    messages,
    recommendations,
    handleConnect,
    handleEventJoin,
    handleGroupJoin,
    handleMessageSend,
    handleRecommendationAccept
  } = useNetworkingHub();

  return (
    <HubContainer theme={theme}>
      <HubCard theme={theme}>
        <h2>Networking Hub</h2>

        <ConnectionsGrid theme={theme}>
          <h3>
            <FontAwesomeIcon icon={faUsers} />
            Conexões Profissionais
          </h3>
          <div className="connections">
            {connections.map(connection => (
              <ConnectionCard key={connection.id} theme={theme}>
                <img src={connection.avatar} alt={connection.name} />
                <div className="info">
                  <h4>{connection.name}</h4>
                  <span>{connection.role}</span>
                  <p>{connection.company}</p>
                </div>
                <div className="actions">
                  <button onClick={() => handleConnect(connection.id)}>
                    Conectar
                  </button>
                  <button onClick={() => handleMessageSend(connection.id)}>
                    Mensagem
                  </button>
                </div>
              </ConnectionCard>
            ))}
          </div>
        </ConnectionsGrid>

        <EventsSection theme={theme}>
          <h3>
            <FontAwesomeIcon icon={faCalendarAlt} />
            Eventos de Networking
          </h3>
          <div className="events-grid">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <FontAwesomeIcon icon={event.icon} />
                  <div>
                    <h4>{event.title}</h4>
                    <span>{event.date}</span>
                  </div>
                </div>
                <p>{event.description}</p>
                <div className="event-footer">
                  <span>{event.attendees} participantes</span>
                  <button onClick={() => handleEventJoin(event.id)}>
                    Participar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </EventsSection>

        <GroupsPanel theme={theme}>
          <h3>
            <FontAwesomeIcon icon={faHandshake} />
            Grupos Profissionais
          </h3>
          <div className="groups-grid">
            {groups.map(group => (
              <div key={group.id} className="group-card">
                <img src={group.image} alt={group.name} />
                <div className="group-info">
                  <h4>{group.name}</h4>
                  <p>{group.description}</p>
                  <div className="group-stats">
                    <span>{group.members} membros</span>
                    <span>{group.posts} posts</span>
                  </div>
                </div>
                <button onClick={() => handleGroupJoin(group.id)}>
                  Participar
                </button>
              </div>
            ))}
          </div>
        </GroupsPanel>

        <MessagesPanel theme={theme}>
          <h3>
            <FontAwesomeIcon icon={faComments} />
            Mensagens Recentes
          </h3>
          <div className="messages-list">
            {messages.map(message => (
              <div key={message.id} className="message-card">
                <img src={message.sender.avatar} alt={message.sender.name} />
                <div className="message-content">
                  <div className="message-header">
                    <h4>{message.sender.name}</h4>
                    <span>{message.time}</span>
                  </div>
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </MessagesPanel>

        <RecommendationsGrid theme={theme}>
          <h3>
            <FontAwesomeIcon icon={faStar} />
            Recomendações
          </h3>
          <div className="recommendations">
            {recommendations.map(rec => (
              <div key={rec.id} className="recommendation-card">
                <div className="recommender">
                  <img src={rec.recommender.avatar} alt={rec.recommender.name} />
                  <div>
                    <h4>{rec.recommender.name}</h4>
                    <span>{rec.recommender.role}</span>
                  </div>
                </div>
                <p>{rec.content}</p>
                <div className="skills">
                  {rec.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <button onClick={() => handleRecommendationAccept(rec.id)}>
                  Aceitar Recomendação
                </button>
              </div>
            ))}
          </div>
        </RecommendationsGrid>
      </HubCard>
    </HubContainer>
  );
}

export default JobsNetworkingHubComp;
