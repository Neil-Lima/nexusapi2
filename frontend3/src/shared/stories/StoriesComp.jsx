'use client';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  StoriesContainer,
  StoriesWrapper,
  StoryItem,
  StoryContent,
  StoryUser,
  CreateStory,
  NavigationButton
} from './styles/StoriesStyles';
import { useStories } from './utils/StoriesUtils';

function StoriesComp() {
  const { theme } = useTheme();
  const { 
    storiesRef, 
    stories, 
    handleScroll, 
    handleStoryClick, 
    handleCreateStory 
  } = useStories();

  return (
    <StoriesContainer theme={theme}>
      <Card>
        <Card.Header>
          <h5>Stories</h5>
        </Card.Header>
        <Card.Body>
          <NavigationButton 
            direction="left" 
            theme={theme} 
            onClick={() => handleScroll('left')}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavigationButton>

          <StoriesWrapper ref={storiesRef}>
            <CreateStory theme={theme} onClick={handleCreateStory}>
              <div className="create-story-content">
                <FontAwesomeIcon icon={faPlus} />
                <span>Criar Story</span>
              </div>
            </CreateStory>

            {stories.map(story => (
              <StoryItem 
                key={story.id} 
                theme={theme}
                onClick={() => handleStoryClick(story.id)}
              >
                <StoryContent>
                  <img src={story.image} alt={story.user} className="story-image" />
                  <StoryUser theme={theme}>
                    <img src={story.avatar} alt={story.user} className="user-avatar" />
                    <span>{story.user}</span>
                  </StoryUser>
                </StoryContent>
              </StoryItem>
            ))}
          </StoriesWrapper>

          <NavigationButton 
            direction="right" 
            theme={theme} 
            onClick={() => handleScroll('right')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </NavigationButton>
        </Card.Body>
      </Card>
    </StoriesContainer>
  );
}

export default StoriesComp;
