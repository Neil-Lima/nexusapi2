'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/components/group/styles/GroupStyles';
import GroupDetailHeaderComp from '@/components/group/GroupDetailHeaderComp';
import GroupDetailNavComp from '@/components/group/GroupDetailNavComp';
import GroupDetailContentComp from '@/components/group/GroupDetailContentComp';
import GroupDetailModalComp from '@/components/group/GroupDetailModalComp';
import { useGroupDetail } from '@/components/group/utils/GroupUtils';

export default function GroupDetailPage({ params }) {
  const { theme } = useTheme();
  const groupDetail = useGroupDetail(params.id);
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <GradientBackground theme={theme}>
      <Container>
        <GroupDetailHeaderComp 
          group={groupDetail.group}
          theme={theme}
        />
        <GroupDetailNavComp 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme={theme}
        />
        <GroupDetailContentComp 
          activeTab={activeTab}
          group={groupDetail.group}
          handleLike={groupDetail.handleLike}
          handleComment={groupDetail.handleComment}
          handleShare={groupDetail.handleShare}
          handlePollVote={groupDetail.handlePollVote}
          theme={theme}
        />
        <GroupDetailModalComp 
          showInviteModal={groupDetail.showInviteModal}
          setShowInviteModal={groupDetail.setShowInviteModal}
          handleInvite={groupDetail.handleInvite}
          theme={theme}
        />
      </Container>
    </GradientBackground>
  );
}
