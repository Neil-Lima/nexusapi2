// CommunitiesRelatedComp.jsx
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

export default function CommunitiesRelatedComp() {
  const { theme } = useTheme();
  const { relatedCommunities } = useCommunitiesRelated();

  return (
    <RelatedContainer theme={theme}>
      <h3>Comunidades Relacionadas</h3>
      
      <RelatedList>
        {relatedCommunities.map(community => (
          <RelatedItem key={community.id} theme={theme}>
            <img src={community.image} alt={community.name} />
            <RelatedInfo>
              <h4>{community.name}</h4>
              <span>{community.members} membros</span>
            </RelatedInfo>
          </RelatedItem>
        ))}
      </RelatedList>
    </RelatedContainer>
  );
}
