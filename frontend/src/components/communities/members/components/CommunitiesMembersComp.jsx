'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faShield, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  MembersContainer,
  MembersHeader,
  MembersList,
  MemberItem,
  MemberAvatar,
  MemberInfo,
  MemberRole,
  RankingList,
  RankingItem,
  RankingPosition,
  RankingInfo,
  RankingPoints
} from '../styles/CommunitiesMembersStyles';
import { useCommunitiesMembers } from '../utils/CommunitiesMembersUtils';

export default function CommunitiesMembersComp({ communityId }) {
  const { theme } = useTheme();
  const { members, topMembers, loading, error } = useCommunitiesMembers(communityId);

  if (loading) return <div>Carregando membros...</div>;
  if (error) return <div>Erro ao carregar membros: {error}</div>;

  return (
    <MembersContainer theme={theme}>
      <MembersHeader>
        <h3><FontAwesomeIcon icon={faUsers} /> Membros</h3>
        <span>{members.length} membros</span>
      </MembersHeader>

      <MembersList>
        {members.slice(0, 5).map((member) => (
          <MemberItem key={member._id} theme={theme}>
            <MemberAvatar src={member.profileImage || '/default-avatar.jpg'} alt={member.nome} />
            <MemberInfo>
              <h4>{member.nome}</h4>
              <MemberRole theme={theme}>
                {member.role === 'owner' && <FontAwesomeIcon icon={faCrown} />}
                {member.role === 'admin' && <FontAwesomeIcon icon={faShield} />}
                {member.roleTitle}
              </MemberRole>
            </MemberInfo>
          </MemberItem>
        ))}
      </MembersList>

      <MembersHeader>
        <h3><FontAwesomeIcon icon={faTrophy} /> Top Membros</h3>
      </MembersHeader>

      <RankingList>
        {topMembers.map((member, index) => (
          <RankingItem key={member._id} theme={theme}>
            <RankingPosition position={index + 1}>#{index + 1}</RankingPosition>
            <MemberAvatar src={member.profileImage || '/default-avatar.jpg'} alt={member.nome} />
            <RankingInfo>
              <h4>{member.nome}</h4>
              <RankingPoints theme={theme}>
                Membro desde {new Date(member.joinedAt).toLocaleDateString()}
              </RankingPoints>
            </RankingInfo>
          </RankingItem>
        ))}
      </RankingList>
    </MembersContainer>
  );
}
