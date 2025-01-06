'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSliders,
  faMapMarker,
  faVenusMars,
  faGraduationCap,
  faBriefcase,
  faCross,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  PreferencesContainer,
  PreferencesHeader,
  PreferencesForm,
  FormGroup,
  RangeGroup,
  RangeValue,
  InterestTags,
  InterestTag,
  ApplyButton
} from '../styles/DatingPreferencesStyles';
import { useDatingPreferences } from '../utils/DatingPreferencesUtils';

export default function DatingPreferencesComp() {
  const { theme } = useTheme();
  const {
    preferences,
    availableInterests,
    handleInputChange,
    handleInterestToggle,
    handleApplyFilters
  } = useDatingPreferences();

  return (
    <PreferencesContainer theme={theme}>
      <PreferencesHeader>
        <FontAwesomeIcon icon={faSliders} />
        <h2>Preferências</h2>
      </PreferencesHeader>

      <PreferencesForm onSubmit={handleApplyFilters}>
        <FormGroup>
          <label>
            <FontAwesomeIcon icon={faVenusMars} />
            Procurando por
          </label>
          <select 
            name="gender" 
            value={preferences.gender}
            onChange={handleInputChange}
          >
            <option value="all">Todos</option>
            <option value="female">Mulheres</option>
            <option value="male">Homens</option>
            <option value="other">Outros</option>
          </select>
        </FormGroup>

        <RangeGroup>
          <label>Idade</label>
          <div>
            <input
              type="range"
              name="ageMin"
              min="18"
              max="100"
              value={preferences.ageMin}
              onChange={handleInputChange}
            />
            <RangeValue>{preferences.ageMin} - {preferences.ageMax} anos</RangeValue>
          </div>
        </RangeGroup>

        <FormGroup>
          <label>
            <FontAwesomeIcon icon={faMapMarker} />
            Distância Máxima
          </label>
          <select 
            name="distance" 
            value={preferences.distance}
            onChange={handleInputChange}
          >
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="25">25 km</option>
            <option value="50">50 km</option>
            <option value="100">100 km</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>
            <FontAwesomeIcon icon={faGraduationCap} />
            Escolaridade
          </label>
          <select 
            name="education" 
            value={preferences.education}
            onChange={handleInputChange}
          >
            <option value="any">Qualquer</option>
            <option value="highschool">Ensino Médio</option>
            <option value="college">Graduação</option>
            <option value="masters">Mestrado</option>
            <option value="phd">Doutorado</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>
            <FontAwesomeIcon icon={faBriefcase} />
            Profissão
          </label>
          <input
            type="text"
            name="occupation"
            value={preferences.occupation}
            onChange={handleInputChange}
            placeholder="Digite uma profissão"
          />
        </FormGroup>

        <FormGroup>
          <label>
            <FontAwesomeIcon icon={faCross} />
            Religião
          </label>
          <select 
            name="religion" 
            value={preferences.religion}
            onChange={handleInputChange}
          >
            <option value="any">Qualquer</option>
            <option value="catholic">Católica</option>
            <option value="protestant">Protestante</option>
            <option value="spiritist">Espírita</option>
            <option value="jewish">Judaica</option>
            <option value="buddhist">Budista</option>
            <option value="other">Outra</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>
            <FontAwesomeIcon icon={faHeart} />
            Interesses
          </label>
          <InterestTags>
            {availableInterests.map((interest) => (
              <InterestTag
                key={interest}
                selected={preferences.interests.includes(interest)}
                onClick={() => handleInterestToggle(interest)}
                theme={theme}
              >
                {interest}
              </InterestTag>
            ))}
          </InterestTags>
        </FormGroup>

        <ApplyButton type="submit" theme={theme}>
          Aplicar Filtros
        </ApplyButton>
      </PreferencesForm>
    </PreferencesContainer>
  );
}
