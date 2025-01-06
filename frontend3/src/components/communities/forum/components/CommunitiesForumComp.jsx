// CommunitiesForumComp.jsx
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPlus, faPinned, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  ForumContainer,
  ForumHeader,
  ForumTitle,
  CreateTopicButton,
  TopicsList,
  TopicItem,
  TopicTitle,
  TopicInfo,
  TopicStats,
  PinnedBadge
} from '../styles/CommunitiesForumStyles';
import { useCommunitiesForum } from '../utils/CommunitiesForumUtils';

export default function CommunitiesForumComp() {
  const { theme } = useTheme();
  const { topics, handleCreateTopic, handleLikeTopic } = useCommunitiesForum();

  return (
    <ForumContainer theme={theme}>
      <ForumHeader>
        <ForumTitle theme={theme}>
          <FontAwesomeIcon icon={faComments} /> Fórum
        </ForumTitle>
        <CreateTopicButton theme={theme} onClick={handleCreateTopic}>
          <FontAwesomeIcon icon={faPlus} /> Novo Tópico
        </CreateTopicButton>
      </ForumHeader>

      <TopicsList>
        {topics.map((topic) => (
          <TopicItem key={topic.id} theme={theme}>
            {topic.isPinned && (
              <PinnedBadge>
                <FontAwesomeIcon icon={faPinned} /> Fixado
              </PinnedBadge>
            )}
            <TopicTitle>{topic.title}</TopicTitle>
            <TopicInfo>
              por {topic.author} • {topic.date}
            </TopicInfo>
            <TopicStats>
              <span>{topic.replies} respostas</span>
              <button onClick={() => handleLikeTopic(topic.id)}>
                <FontAwesomeIcon icon={faHeart} /> {topic.likes}
              </button>
            </TopicStats>
          </TopicItem>
        ))}
      </TopicsList>
    </ForumContainer>
  );
}
