'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { PaginationContainer, PageButton } from './styles/SalesStyle';

export default function SalesPaginationComp({ currentPage = 1, totalPages = 1, onPageChange }) {
  const { theme } = useTheme();

  return (
    <PaginationContainer theme={theme}>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        theme={theme}
      >
        Anterior
      </PageButton>
      
      {[...Array(totalPages)].map((_, index) => (
        <PageButton
          key={index + 1}
          $active={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
          theme={theme}
        >
          {index + 1}
        </PageButton>
      ))}
      
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        theme={theme}
      >
        Próxima
      </PageButton>
    </PaginationContainer>
  );
}
