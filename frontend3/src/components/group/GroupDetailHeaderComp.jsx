'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobe, faLock, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { GroupHeader, GroupInfo } from './styles/GroupStyles';

function GroupDetailHeaderComp({ group }) {
  return (
    <GroupHeader coverImage={group.coverImage}>
      <GroupInfo>
        <h1>{group.name}</h1>
        <p>{group.description}</p>
        <div>
          <FontAwesomeIcon icon={faUsers} /> {group.members.length} membros
          <span className="mx-2">•</span>
          <FontAwesomeIcon icon={group.privacy === 'Público' ? faGlobe : faLock} /> {group.privacy}
          <span className="mx-2">•</span>
          <FontAwesomeIcon icon={faInfoCircle} /> {group.category}
        </div>
      </GroupInfo>
    </GroupHeader>
  );
}

export default GroupDetailHeaderComp;
