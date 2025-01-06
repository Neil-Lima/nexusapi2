'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  InterestsContainer,
  InterestGrid,
  InterestTag,
  InterestSearch
} from '../styles/UserInterestsStyles';
import { useUserInterests } from '../utils/UserInterestsUtils';

export default function UserInterestsComp() {
  const { theme } = useTheme();
  const {
    interests,
    selectedInterests,
    searchInterest,
    handleInterestSelect,
    handleInterestRemove,
    handleInterestSearch
  } = useUserInterests();

  return (
    <InterestsContainer theme={theme}>
      <h3>Seus Interesses</h3>
      
      <InterestSearch theme={theme}>
        <input
          type="text"
          placeholder="Buscar interesses..."
          value={searchInterest}
          onChange={handleInterestSearch}
        />
      </InterestSearch>

      <InterestGrid theme={theme}>
        {interests.map((interest) => (
          <InterestTag 
            key={interest.id}
            $selected={selectedInterests.includes(interest.id)}
            onClick={() => handleInterestSelect(interest.id)}
            theme={theme}
          >
            {interest.name}
            <FontAwesomeIcon 
              icon={selectedInterests.includes(interest.id) ? faMinus : faPlus} 
            />
          </InterestTag>
        ))}
      </InterestGrid>

      <div className="selected-interests">
        <h4>Interesses Selecionados</h4>
        <InterestGrid theme={theme}>
          {selectedInterests.map((id) => {
            const interest = interests.find(i => i.id === id);
            return (
              <InterestTag 
                key={id}
                $selected
                onClick={() => handleInterestRemove(id)}
                theme={theme}
              >
                {interest.name}
                <FontAwesomeIcon icon={faMinus} />
              </InterestTag>
            );
          })}
        </InterestGrid>
      </div>
    </InterestsContainer>
  );
}
