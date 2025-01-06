import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, ProfileHeader, ProfileImage, ProfileInfo, StyledButton } from '../styles/ProfileuserStyle';

export function ProfileuserHeaderComp() {
  const { theme } = useTheme();

  return (
    <StyledCard>
      <ProfileHeader>
        <ProfileImage src="https://picsum.photos/200/200?random=profile" roundedCircle width={150} height={150} />
      </ProfileHeader>
      <ProfileInfo>
        <h2>John Doe</h2>
        <p>"Apaixonado por arte, design e novas experiências."</p>
        <StyledButton theme={theme}>
          <FontAwesomeIcon icon={faEdit} /> Editar Perfil
        </StyledButton>
      </ProfileInfo>
    </StyledCard>
  );
}
