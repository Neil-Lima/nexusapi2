'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideo, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  VideoCallContainer,
  VideoGrid,
  VideoFrame,
  CallControls,
  ControlButton
} from '../styles/MessagesVideoCallStyles';
import { useMessagesVideoCall } from '../utils/MessagesVideoCallUtils';

export default function MessagesVideoCallComp({ contact, onEndCall }) {
  const { 
    localStream, 
    remoteStream, 
    isMuted, 
    isVideoEnabled,
    toggleMute,
    toggleVideo,
    handleEndCall 
  } = useMessagesVideoCall({ onEndCall });

  return (
    <VideoCallContainer>
      <VideoGrid>
        <VideoFrame data-main="true">
          {remoteStream ? (
            <video ref={remoteStream} autoPlay playsInline />
          ) : (
            <>
              <img src={contact?.avatar} alt={contact?.name} />
              <span>{contact?.name}</span>
            </>
          )}
        </VideoFrame>
        <VideoFrame>
          {localStream ? (
            <video ref={localStream} autoPlay playsInline muted />
          ) : (
            <>
              <img src="/your-avatar.jpg" alt="You" />
              <span>You</span>
            </>
          )}
        </VideoFrame>
      </VideoGrid>

      <CallControls>
        <ControlButton onClick={toggleMute}>
          <FontAwesomeIcon icon={faMicrophone} style={{ color: isMuted ? 'red' : 'white' }} />
        </ControlButton>
        <ControlButton onClick={toggleVideo}>
          <FontAwesomeIcon icon={faVideo} style={{ color: isVideoEnabled ? 'white' : 'red' }} />
        </ControlButton>
        <ControlButton onClick={handleEndCall} $danger>
          <FontAwesomeIcon icon={faPhone} />
        </ControlButton>
      </CallControls>
    </VideoCallContainer>
  );
}
