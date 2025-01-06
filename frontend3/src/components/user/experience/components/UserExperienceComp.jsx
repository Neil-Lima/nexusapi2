'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  ExperienceCard,
  CardHeader,
  Title,
  AddButton,
  ExperienceList,
  ExperienceItem
} from '../styles/UserExperienceStyles';
import { useUserExperience } from '../utils/UserExperienceUtils';

export default function UserExperienceComp() {
  const { theme } = useTheme();
  const { experiences, handleAddExperience } = useUserExperience();

  return (
    <ExperienceCard theme={theme}>
      <CardHeader>
        <Title>Experiência</Title>
        <AddButton onClick={handleAddExperience}>+</AddButton>
      </CardHeader>
      <ExperienceList>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} theme={theme}>
            <h5>
              <FontAwesomeIcon icon={faStar} />
              <strong>{exp.title}</strong>
            </h5>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </ExperienceCard>
  );
}
