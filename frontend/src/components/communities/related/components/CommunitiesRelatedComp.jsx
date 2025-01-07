'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  RelatedContainer,
  RelatedList,
  RelatedItem,
  RelatedInfo
} from '../styles/CommunitiesRelatedStyles';
import { useCommunitiesRelated } from '../utils/CommunitiesRelatedUtils';

export default function CommunitiesRelatedComp({ communityId }) {
  const { theme } = useTheme();
  const { relatedCommunities, loading, error } = useCommunitiesRelated(communityId);

  if (loading) return <div>Carregando comunidades relacionadas...</div>;
  if (error) return <div>Erro ao carregar comunidades relacionadas: {error}</div>;

  return (
    <RelatedContainer theme={theme}>
      <h3>Comunidades Relacionadas</h3>
      
      <RelatedList>
        {relatedCommunities.map(community => (
          <RelatedItem key={community._id} theme={theme}>
            <img 
              src={community.image || '/default-community.jpg'} 
              alt={community.name} 
            />
            <RelatedInfo>
              <h4>{community.name}</h4>
              <span>{community.stats?.totalMembers || 0} membros</span>
            </RelatedInfo>
          </RelatedItem>
        ))}
      </RelatedList>
    </RelatedContainer>
  );
}
