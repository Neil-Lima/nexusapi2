'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { HeaderContainer, HeaderTitle, HeaderActions } from './styles/SalesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function SalesHeaderComp() {
  const { theme } = useTheme();

  return (
    <HeaderContainer theme={theme}>
      <HeaderTitle>Marketplace</HeaderTitle>
      <HeaderActions>
        <button className="btn-create">
          <FontAwesomeIcon icon={faPlus} /> Criar Anúncio
        </button>
      </HeaderActions>
    </HeaderContainer>
  );
}
