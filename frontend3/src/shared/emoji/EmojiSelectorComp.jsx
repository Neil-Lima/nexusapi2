'use client';
import React, { useEffect, useRef } from 'react';
import { EmojiContainer, Emoji3D } from './styles/EmojiSelectorStyles';
import { initializePicker } from './utils/EmojiSelectorUtils';

function EmojiSelectorComp({ onEmojiSelect }) {
  const ref = useRef(null);

  useEffect(() => {
    initializePicker(ref, onEmojiSelect, Emoji3D);
  }, [onEmojiSelect]);

  return <EmojiContainer ref={ref} />;
}

export default EmojiSelectorComp;
