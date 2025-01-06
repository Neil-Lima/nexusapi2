'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  StoriesContainer,
  StoriesList,
  StoryItem,
  StoryAvatar,
  StoryUsername,
  AddStoryButton
} from '../styles/DatingStoriesStyles';
import { useDatingStories } from '../utils/DatingStoriesUtils';

export default function DatingStoriesComp() {
  const { theme } = useTheme();
  const { stories, handleAddStory, handleViewStory } = useDatingStories();

  return (
    <StoriesContainer theme={theme}>
      <StoriesList>
        <StoryItem>
          <AddStoryButton onClick={handleAddStory} theme={theme}>
            <FontAwesomeIcon icon={faPlus} />
          </AddStoryButton>
          <StoryUsername>Adicionar</StoryUsername>
        </StoryItem>

        {stories.map((story) => (
          <StoryItem key={story.id} onClick={() => handleViewStory(story.id)}>
            <StoryAvatar 
              hasUnviewed={!story.viewed} 
              theme={theme}
            >
              <img src={story.avatar} alt={story.username} />
            </StoryAvatar>
            <StoryUsername>{story.username}</StoryUsername>
          </StoryItem>
        ))}
      </StoriesList>
    </StoriesContainer>
  );
}
