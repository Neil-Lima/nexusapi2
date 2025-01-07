'use client';
import React, { useState } from 'react';
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

export default function CommunitiesForumComp({ communityId }) {
  const { theme } = useTheme();
  const { 
    topics, 
    loading, 
    error, 
    handleCreateTopic, 
    handleLikeTopic 
  } = useCommunitiesForum(communityId);

  const [newTopic, setNewTopic] = useState({ title: '', content: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSubmitTopic = async (e) => {
    e.preventDefault();
    try {
      await handleCreateTopic(newTopic.title, newTopic.content);
      setNewTopic({ title: '', content: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Erro ao criar tópico:', error);
    }
  };

  const handleNewTopicClick = () => {
    setShowForm(true);
    setNewTopic({ title: '', content: '' });
  };

  if (loading) return <div>Carregando fórum...</div>;
  if (error) return <div>Erro ao carregar fórum: {error}</div>;

  return (
    <ForumContainer theme={theme}>
      <ForumHeader>
        <ForumTitle theme={theme}>
          <FontAwesomeIcon icon={faComments} /> Fórum
        </ForumTitle>
        <CreateTopicButton theme={theme} onClick={handleNewTopicClick}>
          <FontAwesomeIcon icon={faPlus} /> Novo Tópico
        </CreateTopicButton>
      </ForumHeader>

      {showForm && (
        <form onSubmit={handleSubmitTopic} style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={newTopic.title}
              onChange={(e) => setNewTopic(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Título do tópico"
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white'
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <textarea
              value={newTopic.content}
              onChange={(e) => setNewTopic(prev => ({ ...prev, content: e.target.value }))}
              placeholder="Conteúdo do tópico"
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                minHeight: '100px'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="submit"
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                border: 'none',
                background: theme.primaryColor,
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Criar Tópico
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <TopicsList>
        {topics.map((topic, index) => (
          <TopicItem key={topic._id || index} theme={theme}>
            {topic.isPinned && (
              <PinnedBadge theme={theme}>
                <FontAwesomeIcon icon={faPinned} /> Fixado
              </PinnedBadge>
            )}
            <TopicTitle>{topic.title}</TopicTitle>
            <TopicInfo>
              por {topic.author?.nome} • {new Date(topic.createdAt).toLocaleDateString()}
            </TopicInfo>
            <TopicStats>
              <span>{topic.comments?.length || 0} respostas</span>
              <button onClick={() => handleLikeTopic(index)}>
                <FontAwesomeIcon icon={faHeart} /> {topic.likes?.length || 0}
              </button>
            </TopicStats>
          </TopicItem>
        ))}
      </TopicsList>
    </ForumContainer>
  );
}
