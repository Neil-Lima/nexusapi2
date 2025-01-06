'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, 
  faUserCheck, 
  faMessage, 
  faCamera,
  faEdit,
  faCheck,
  faTimes,
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
  HeaderContainer,
  CoverSection,
  ProfileSection,
  ProfileImageContainer,
  UserInfoSection,
  ActionSection,
  PrimaryButton,
  SecondaryButton,
  ImageUploadOverlay,
  ImageUploadButton,
  EditableField,
  StatusBadge,
  UserDetailsGrid,
  DetailItem,
  UserBio,
  UserName
} from '../styles/UserHeaderStyles';
import { useUserHeader } from '../utils/UserHeaderUtils';

function UserHeaderComp({ user, isOwnProfile, friendStatus, onFriendAction }) {
  const { theme } = useTheme();
  const {
    isEditing,
    setIsEditing,
    editableFields,
    handleFieldChange,
    coverImage,
    profileImage,
    handleImageUpload,
    handleSaveChanges,
    isUpdating,
    handleImageClick
  } = useUserHeader(user, isOwnProfile);

  return (
    <HeaderContainer theme={theme}>
      <CoverSection>
        <img 
          src={coverImage || '/default-cover.jpg'} 
          alt="Capa" 
          onClick={() => isOwnProfile && handleImageClick('cover')}
        />
        {isOwnProfile && (
          <ImageUploadOverlay>
            <ImageUploadButton htmlFor="coverUpload">
              <FontAwesomeIcon icon={faCamera} />
              <input
                id="coverUpload"
                type="file"
                onChange={(e) => handleImageUpload(e, 'cover')}
                accept="image/*"
                hidden
              />
            </ImageUploadButton>
          </ImageUploadOverlay>
        )}
      </CoverSection>

      <ProfileSection>
        <ProfileImageContainer theme={theme}>
          <img 
            src={profileImage || '/default-avatar.jpg'} 
            alt={user?.nome}
            onClick={() => isOwnProfile && handleImageClick('profile')}
          />
          {isOwnProfile && (
            <ImageUploadOverlay>
              <ImageUploadButton htmlFor="profileUpload">
                <FontAwesomeIcon icon={faCamera} />
                <input
                  id="profileUpload"
                  type="file"
                  onChange={(e) => handleImageUpload(e, 'profile')}
                  accept="image/*"
                  hidden
                />
              </ImageUploadButton>
            </ImageUploadOverlay>
          )}
        </ProfileImageContainer>

        <UserInfoSection>
          <UserName>
            {isEditing ? (
              <EditableField>
                <input
                  type="text"
                  value={editableFields.nome}
                  onChange={(e) => handleFieldChange('nome', e.target.value)}
                  placeholder="Nome"
                />
              </EditableField>
            ) : (
              <>
                {`${user?.nome} ${user?.sobrenome}`}
                <StatusBadge online={user?.isOnline}>
                  {user?.isOnline ? 'Online' : 'Offline'}
                </StatusBadge>
              </>
            )}
          </UserName>

          <UserDetailsGrid>
            <DetailItem>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {isEditing ? (
                <EditableField>
                  <input
                    type="text"
                    value={editableFields.location}
                    onChange={(e) => handleFieldChange('location', e.target.value)}
                    placeholder="Adicionar localização"
                  />
                </EditableField>
              ) : (
                <span>{user?.location || 'Localização não informada'}</span>
              )}
            </DetailItem>
            <DetailItem>
              <FontAwesomeIcon icon={faBriefcase} />
              {isEditing ? (
                <EditableField>
                  <input
                    type="text"
                    value={editableFields.work}
                    onChange={(e) => handleFieldChange('work', e.target.value)}
                    placeholder="Adicionar trabalho"
                  />
                </EditableField>
              ) : (
                <span>{user?.work || 'Trabalho não informado'}</span>
              )}
            </DetailItem>
            <DetailItem>
              <FontAwesomeIcon icon={faGraduationCap} />
              {isEditing ? (
                <EditableField>
                  <input
                    type="text"
                    value={editableFields.education}
                    onChange={(e) => handleFieldChange('education', e.target.value)}
                    placeholder="Adicionar educação"
                  />
                </EditableField>
              ) : (
                <span>{user?.education || 'Educação não informada'}</span>
              )}
            </DetailItem>
          </UserDetailsGrid>

          <UserBio>
            {isEditing ? (
              <EditableField>
                <textarea
                  value={editableFields.bio}
                  onChange={(e) => handleFieldChange('bio', e.target.value)}
                  placeholder="Escreva algo sobre você..."
                />
              </EditableField>
            ) : (
              <p>{user?.bio || 'Sem descrição'}</p>
            )}
          </UserBio>

          <ActionSection>
            {isOwnProfile ? (
              isEditing ? (
                <>
                  <PrimaryButton onClick={handleSaveChanges} disabled={isUpdating}>
                    <FontAwesomeIcon icon={faCheck} />
                    {isUpdating ? 'Salvando...' : 'Salvar Alterações'}
                  </PrimaryButton>
                  <SecondaryButton onClick={() => setIsEditing(false)}>
                    <FontAwesomeIcon icon={faTimes} />
                    Cancelar
                  </SecondaryButton>
                </>
              ) : (
                <PrimaryButton onClick={() => setIsEditing(true)}>
                  <FontAwesomeIcon icon={faEdit} />
                  Editar Perfil
                </PrimaryButton>
              )
            ) : (
              renderFriendshipButtons()
            )}
          </ActionSection>
        </UserInfoSection>
      </ProfileSection>
    </HeaderContainer>
  );

  function renderFriendshipButtons() {
    if (friendStatus.isFriend) {
      return (
        <>
          <PrimaryButton onClick={() => onFriendAction.removeFriend(user._id)}>
            <FontAwesomeIcon icon={faUserCheck} />
            Amigos
          </PrimaryButton>
          <SecondaryButton>
            <FontAwesomeIcon icon={faMessage} />
            Mensagem
          </SecondaryButton>
        </>
      );
    }
    if (friendStatus.hasPendingRequest) {
      return (
        <SecondaryButton disabled>
          Solicitação Enviada
        </SecondaryButton>
      );
    }
    if (friendStatus.hasReceivedRequest) {
      return (
        <>
          <PrimaryButton onClick={() => onFriendAction.acceptRequest(user._id)}>
            Aceitar Solicitação
          </PrimaryButton>
          <SecondaryButton onClick={() => onFriendAction.rejectRequest(user._id)}>
            Recusar
          </SecondaryButton>
        </>
      );
    }
    return (
      <PrimaryButton onClick={() => onFriendAction.sendRequest(user._id)}>
        <FontAwesomeIcon icon={faUserPlus} />
        Adicionar
      </PrimaryButton>
    );
  }
}

export default UserHeaderComp;
