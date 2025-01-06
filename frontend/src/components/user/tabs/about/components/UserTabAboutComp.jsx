'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  AboutContainer,
  AboutSection,
  EditButton
} from '../styles/UserTabAboutStyles';
import { useUserTabAbout } from '../utils/UserTabAboutUtils';

function UserTabAboutComp({ user, isOwnProfile }) {
  const { theme } = useTheme();
  const {
    isEditing,
    setIsEditing,
    formData,
    handleInputChange,
    handlePrivacyChange,
    handleSave,
    isUpdating
  } = useUserTabAbout(user, isOwnProfile);

  return (
    <AboutContainer theme={theme}>
      <AboutSection theme={theme}>
        <h3>Informações Básicas</h3>
        {isEditing ? (
          <>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descreva sobre você..."
            />
            <select
              value={formData.privacy.basic}
              onChange={(e) => handlePrivacyChange('basic', e.target.value)}
            >
              <option value="public">Público</option>
              <option value="friends">Apenas Amigos</option>
              <option value="private">Privado</option>
            </select>
          </>
        ) : (
          <p>{user.description}</p>
        )}
      </AboutSection>

      {isOwnProfile && (
        <EditButton
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          disabled={isUpdating}
          theme={theme}
        >
          {isEditing ? (isUpdating ? 'Salvando...' : 'Salvar') : 'Editar'}
        </EditButton>
      )}
    </AboutContainer>
  );
}

export default UserTabAboutComp;
