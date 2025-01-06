'use client';
import React from 'react';
import { Tab, Card } from 'react-bootstrap';
import GroupFeedComp from './GroupFeedComp';
import GroupMembersComp from './GroupMembersComp';
import GroupEventsComp from './GroupEventsComp';
import GroupDiscussionsComp from './GroupDiscussionsComp';
import GroupMediaComp from './GroupMediaComp';
import GroupAboutComp from './GroupAboutComp';

function GroupDetailContentComp({ 
  activeTab, 
  group, 
  handleLike, 
  handleComment, 
  handleShare, 
  handlePollVote 
}) {
  return (
    <Card.Body>
      <Tab.Content>
        <Tab.Pane eventKey="feed" active={activeTab === 'feed'}>
          <GroupFeedComp 
            posts={group.posts}
            handleLike={handleLike}
            handleComment={handleComment}
            handleShare={handleShare}
            handlePollVote={handlePollVote}
          />
        </Tab.Pane>
        <Tab.Pane eventKey="members" active={activeTab === 'members'}>
          <GroupMembersComp 
            admins={group.admins}
            moderators={group.moderators}
            members={group.members}
          />
        </Tab.Pane>
        <Tab.Pane eventKey="events" active={activeTab === 'events'}>
          <GroupEventsComp events={group.events} />
        </Tab.Pane>
        <Tab.Pane eventKey="discussions" active={activeTab === 'discussions'}>
          <GroupDiscussionsComp discussions={group.discussions} />
        </Tab.Pane>
        <Tab.Pane eventKey="media" active={activeTab === 'media'}>
          <GroupMediaComp media={group.media} />
        </Tab.Pane>
        <Tab.Pane eventKey="about" active={activeTab === 'about'}>
          <GroupAboutComp group={group} />
        </Tab.Pane>
      </Tab.Content>
    </Card.Body>
  );
}

export default GroupDetailContentComp;
