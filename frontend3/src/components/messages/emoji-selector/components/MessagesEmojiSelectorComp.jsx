'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  EmojiContainer,
  EmojiHeader,
  EmojiSearch,
  EmojiCategories,
  EmojiCategory,
  EmojiGrid,
  EmojiButton,
  RecentEmojis
} from '../styles/MessagesEmojiSelectorStyles';
import { useMessagesEmojiSelector } from '../utils/MessagesEmojiSelectorUtils';

export default function MessagesEmojiSelectorComp({ onEmojiSelect }) {
  const { theme } = useTheme();
  const { 
    searchTerm,
    recentEmojis,
    emojiCategories,
    handleSearchChange,
    handleEmojiClick 
  } = useMessagesEmojiSelector({ onEmojiSelect });

  return (
    <EmojiContainer theme={theme}>
      <EmojiHeader>
        <FontAwesomeIcon icon={faSmile} />
        <span>Emojis</span>
      </EmojiHeader>

      <EmojiSearch>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Buscar emojis..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </EmojiSearch>

      {recentEmojis.length > 0 && !searchTerm && (
        <RecentEmojis>
          <h6>
            <FontAwesomeIcon icon={faClock} />
            Recentes
          </h6>
          <EmojiGrid>
            {recentEmojis.map((emoji, index) => (
              <EmojiButton
                key={`recent-${index}`}
                onClick={() => handleEmojiClick(emoji)}
                theme={theme}
              >
                {emoji}
              </EmojiButton>
            ))}
          </EmojiGrid>
        </RecentEmojis>
      )}

      <EmojiCategories>
        {emojiCategories.map((category, categoryIndex) => (
          <EmojiCategory key={categoryIndex}>
            <h6>{category.name}</h6>
            <EmojiGrid>
              {category.emojis.map((emoji, emojiIndex) => (
                <EmojiButton
                  key={`${categoryIndex}-${emojiIndex}`}
                  onClick={() => handleEmojiClick(emoji)}
                  theme={theme}
                >
                  {emoji}
                </EmojiButton>
              ))}
            </EmojiGrid>
          </EmojiCategory>
        ))}
      </EmojiCategories>
    </EmojiContainer>
  );
}
