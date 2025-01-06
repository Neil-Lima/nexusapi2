// CommunitiesMembersComp.jsx
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

export default function CommunitiesMembersComp() {
  const { theme } = useTheme();
  const { members, topMembers } = useCommunitiesMembers();

  return (
    <MembersContainer theme={theme}>
      <MembersHeader>
        <h3><FontAwesomeIcon icon={faUsers} /> Membros</h3>
        <span>{members.length} membros</span>
      </MembersHeader>

      <MembersList>
        {members.slice(0, 5).map((member) => (
          <MemberItem key={member.id} theme={theme}>
            <MemberAvatar src={member.avatar} alt={member.name} />
            <MemberInfo>
              <h4>{member.name}</h4>
              <MemberRole theme={theme}>
                {member.role === 'owner' && <FontAwesomeIcon icon={faCrown} />}
                {member.role === 'mod' && <FontAwesomeIcon icon={faShield} />}
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
          <RankingItem key={member.id} theme={theme}>
            <RankingPosition position={index + 1}>#{index + 1}</RankingPosition>
            <MemberAvatar src={member.avatar} alt={member.name} />
            <RankingInfo>
              <h4>{member.name}</h4>
              <RankingPoints theme={theme}>
                {member.points} pontos
              </RankingPoints>
            </RankingInfo>
          </RankingItem>
        ))}
      </RankingList>
    </MembersContainer>
  );
}
