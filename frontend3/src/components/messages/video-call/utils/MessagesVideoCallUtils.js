'use client';
import { useState, useRef, useEffect } from 'react';

export const useMessagesVideoCall = ({ onEndCall }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const localStream = useRef(null);
  const remoteStream = useRef(null);

  useEffect(() => {
    initializeMediaStream();
    return () => {
      stopMediaStream();
    };
  }, []);

  const initializeMediaStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      localStream.current = stream;
      // Aqui seria implementada a lógica de conexão WebRTC
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const stopMediaStream = () => {
    if (localStream.current) {
      localStream.current.getTracks().forEach(track => track.stop());
    }
  };

  const toggleMute = () => {
    if (localStream.current) {
      const audioTracks = localStream.current.getAudioTracks();
      audioTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (localStream.current) {
      const videoTracks = localStream.current.getVideoTracks();
      videoTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const handleEndCall = () => {
    stopMediaStream();
    onEndCall();
  };

  return {
    localStream,
    remoteStream,
    isMuted,
    isVideoEnabled,
    toggleMute,
    toggleVideo,
    handleEndCall
  };
};
